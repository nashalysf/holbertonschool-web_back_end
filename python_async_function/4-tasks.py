#!/usr/bin/env python3
""" Python Asyn Function """
import asyncio
from typing import List


task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """ invoked task_wait_random n times with max_delay """
    tasks = [task_wait_random(max_delay) for i in range(n)]
    return [await task for task in asyncio.as_completed(tasks)]

