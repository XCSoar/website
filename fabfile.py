from fabric.api import local


def render():
    """ Renders the website to the _site folder """
    local('jekyll')


def serve():
    """ Runs a local server on port 8080 that serves the website """
    local('jekyll --server 8080 --auto')
