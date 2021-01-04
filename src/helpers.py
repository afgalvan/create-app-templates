"""
Docstring helpers
"""


def helper():
    """
    helper function description
    """

    return True


def odd_numbers(limit: int):
    """
    Generate odd numbers
    """

    if not isinstance(limit, int):
        return None

    numbers = []
    for i in range(1, limit + 1, 2):
        numbers.append(i)

    return numbers
