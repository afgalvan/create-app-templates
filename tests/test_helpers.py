"""
Tests docstring
"""
import pytest

from .context import helper, odd_numbers


@pytest.mark.test_cases
def test_received():
    """
    received test description
    """

    assert helper() is True, "Cannot connect with helpers.py"


@pytest.mark.test_cases
def test_odd_numbers():
    """
    odd_numbers test description
    """

    assert odd_numbers("4") is None, "Function shouldn't take strings has arguments."
    assert odd_numbers(5) == [1, 3, 5], "Odd numbers cannot be generated correctly."
    assert odd_numbers(2) == [
        1,
    ], "Odd numbers cannot be generated correctly."
    assert odd_numbers(0) == [], "Odd numbers cannot be generated correctly."
