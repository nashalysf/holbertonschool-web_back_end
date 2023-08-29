#!/usr/bin/env python3
""" Basic Python Annotations """


from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Creates and calls function to multiply"""
    def return_multiplier(d: float) -> float:
        """Multiplies floats"""
        return d * multiplier
    return return_multiplier
