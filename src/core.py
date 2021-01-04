"""
Docstring core
"""

from platform import system

from src.helpers import helper


def received():
    """
    Received function description
    """

    if helper():
        return system()
    return None


def main():
    """
    Main function description
    """

    print("Hello {0}!".format(received()))
