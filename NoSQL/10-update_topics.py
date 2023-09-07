#!/usr/bin/env python3
"""
MongoDB manipulation in Python
"""
import pymongo


def update_topics(mongo_collection, name, topics):
    """
    Changes all topics of document based on name
    """
    new_doc = mongo_collection.update_many({
        "name" : name
        },
        {
            "$set": {
                "topics": topics
                }
            })
    return new_doc
