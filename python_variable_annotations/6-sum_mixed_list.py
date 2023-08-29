#!/usr/bin/env python3
""" Basic Python Annotations """


from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Returns sum list of floats"""
    return sum(mxd_lst)
