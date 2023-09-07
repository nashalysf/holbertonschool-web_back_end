#!/usr/bin/env python3
"""
MongoDB manipulation in Python
"""
import pymongo


def list_all(mongo_collection):
    """
    Lists all documents of collection
    """
    if not mongo_collection:
        return []
    document = mongo_collection.find()
    return [doc for docs in documents]
