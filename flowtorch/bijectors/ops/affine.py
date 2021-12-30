# Copyright (c) Meta Platforms, Inc

from typing import Optional, Tuple

import flowtorch
import torch
from flowtorch.bijectors.base import Bijector
from flowtorch.ops import clamp_preserve_gradients
from torch.distributions.utils import _sum_rightmost


class Affine(Bijector):
    r"""
    Affine mapping :math:`\mathbf{y} = \mu + \sigma \otimes \mathbf{x}` where
    $\mu$ and $\sigma$ are learnable parameters.

    """

    def __init__(
        self,
        params: Optional[flowtorch.Lazy] = None,
        *,
        shape: torch.Size,
        context_shape: Optional[torch.Size] = None,
        log_scale_min_clip: float = -5.0,
        log_scale_max_clip: float = 3.0,
        sigmoid_bias: float = 2.0,
    ) -> None:
        super().__init__(params, shape=shape, context_shape=context_shape)
        self.log_scale_min_clip = log_scale_min_clip
        self.log_scale_max_clip = log_scale_max_clip
        self.sigmoid_bias = sigmoid_bias

    def _forward(
        self,
        x: torch.Tensor,
        context: Optional[torch.Tensor] = None,
    ) -> torch.Tensor:
        params = self.params
        assert params is not None

        mean, log_scale = params(x, context=context)
        log_scale = clamp_preserve_gradients(
            log_scale, self.log_scale_min_clip, self.log_scale_max_clip
        )
        scale = torch.exp(log_scale)
        y = scale * x + mean
        return y

    def _inverse(
        self,
        y: torch.Tensor,
        x: Optional[torch.Tensor] = None,
        context: Optional[torch.Tensor] = None,
    ) -> torch.Tensor:
        params = self.params
        assert params is not None

        mean, log_scale = params(x, context=context)
        log_scale = clamp_preserve_gradients(
            log_scale, self.log_scale_min_clip, self.log_scale_max_clip
        )
        inverse_scale = torch.exp(-log_scale)
        x_new = (y - mean) * inverse_scale
        return x_new

    def _log_abs_det_jacobian(
        self,
        x: torch.Tensor,
        y: torch.Tensor,
        context: Optional[torch.Tensor] = None,
    ) -> torch.Tensor:
        params = self.params
        assert params is not None

        # Note: params will take care of caching "mean, log_scale = params(x)"
        _, log_scale = params(x, context=context)
        log_scale = clamp_preserve_gradients(
            log_scale, self.log_scale_min_clip, self.log_scale_max_clip
        )
        return _sum_rightmost(log_scale, self.domain.event_dim)

    def param_shapes(self, shape: torch.Size) -> Tuple[torch.Size, torch.Size]:
        # A mean and log variance for every dimension of the event shape
        return shape, shape