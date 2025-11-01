"""
Base runner class for all audio generation models.
"""
from abc import ABC, abstractmethod
from typing import Any, Optional, BinaryIO
import torch


class BaseRunner(ABC):
    """Abstract base class for model runners."""
    
    def __init__(self, model_name: str):
        self.model_name = model_name
        self.model = None
        self.device = "cuda" if torch.cuda.is_available() else "cpu"
        self._loaded = False
    
    @abstractmethod
    def load_model(self) -> None:
        """Load the model into memory."""
        pass
    
    @abstractmethod
    def generate(
        self,
        prompt: str,
        duration: int = 30,
        **kwargs: Any
    ) -> bytes:
        """
        Generate audio from text prompt.
        
        Args:
            prompt: Text description of desired audio
            duration: Length in seconds
            **kwargs: Additional model-specific parameters
        
        Returns:
            Audio data as bytes
        """
        pass
    
    def ensure_loaded(self) -> None:
        """Ensure model is loaded."""
        if not self._loaded:
            self.load_model()
            self._loaded = True
    
    def get_device_info(self) -> dict:
        """Get device information."""
        info = {
            "device": self.device,
            "cuda_available": torch.cuda.is_available(),
        }
        if self.device == "cuda":
            info["device_name"] = torch.cuda.get_device_name(0)
            info["device_memory"] = torch.cuda.get_device_properties(0).total_memory
        return info


