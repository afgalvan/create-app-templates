"""
Tests docstring
"""
from platform import system

import pytest

from .context import received


@pytest.mark.test_cases
def test_received():
    """
    Received test description
    """

    assert received() == system(), "Cannot connect with helpers.py"
