# pylint: skip-file
"""
Import src directory scripts
Don't run tests from the test folder, run them in the root dir instead.
"""

from sys import path

path.append("src")
from core import received
from helpers import helper, odd_numbers

if __name__ == "__main__":
    received()
    helper()
