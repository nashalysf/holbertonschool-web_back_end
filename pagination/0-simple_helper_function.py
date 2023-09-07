#!/usr/bin/env python3
"""
Python Pagination
"""
from typing import Tuple

def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """ 
    Returns tuple of size with (start-index, end-index) for pagination parameters
    """
    start_index: int = 0
    end_index: int = page * page_size

    for i in range(page -1):
        start_index += page_size

    return (start_index, end_index)
