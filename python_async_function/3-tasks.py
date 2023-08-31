#!/usr/bin/env python3
""" Python Asyn Function """
import asyncio


wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """ measures time of async funtions """

    return asyncio.create_task(wait_random(max_delay))
