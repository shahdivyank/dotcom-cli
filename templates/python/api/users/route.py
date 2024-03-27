from dotcom import Response

def GET():
    return Response(200, { "message": "hello!" })