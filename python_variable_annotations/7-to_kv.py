#!/usr/bin/env python3
""" Basic Python Annotations """


from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Returns tuple"""
    return tuple([k, v*v])
