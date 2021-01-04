init:
	pip install pipenv
	pipenv install --ignore-pipfile
	pipenv shell

lint:
	black .
	isort .
	pytest --pylint -m "not test_cases"