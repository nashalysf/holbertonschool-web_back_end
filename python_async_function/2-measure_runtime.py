#!/usr/bin/env python3
""" Python Asyn Function """
import asyncio
import random
from time import perf_counter


wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """ measures time of async funtions """
    counter = perf_counter()
    asyncio.run(wait_n(n, max_delay))
    time = perf_counter() - counter

    return time
