#!/usr/bin/env python3
"""
MongoDB manipulation in Python
"""
import pymongo


def list_all(mongo_collection):
    """
    Lists all documents of collection
    """
    if mongo_collection is None:
        return []
    documents = mongo_collection.find()
    return [doc for doc in documents]
