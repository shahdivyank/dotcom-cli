from dotcom import Dotcom

dotcom = Dotcom()

async def app(scope, receive, send):
    return await dotcom.run(scope, receive, send)