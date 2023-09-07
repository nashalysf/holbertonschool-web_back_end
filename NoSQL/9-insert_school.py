#!/usr/bin/env python3
"""
MongoDB manipulation in Python
"""
import pymongo


def insert_school(mongo_collection, **kwargs):
    """
    Inserts a new document into collection
    """
    data = mongo_collection.insert_one(kwargs)
    return data.inserted_id
