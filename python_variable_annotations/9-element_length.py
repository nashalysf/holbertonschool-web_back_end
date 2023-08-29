#!/usr/bin/env python3
""" Basic Python Annotations """


from typing import List, Tuple, Iterable, Sequence 


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Returns list"""
    return [(i, len(i)) for i in lst]
