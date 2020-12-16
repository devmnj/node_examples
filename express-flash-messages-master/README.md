# express-flash-messages

Provides Express.js flash messages that work with rendering or redirecting.

Requires sessions middleware.

### THIS PROJECT IS UNMAINTAINED

This means that bugs will not be fixed and features will not be added unless someone else does so.  Unfortunately, the former maintainers no longer build express.js applications.

If you're interested in being a maintainer for express-flash-messages, please create an issue.

## Installation
```
$ npm install express-flash-messages
```

## Usage

```
var flash = require('express-flash-messages')
app.use(flash())

app.get('/', function(req, res){
	req.flash('notify', 'This is a test notification.')
	res.render('index')
})

app.get('/redirect', function(req, res){
	req.flash('notify', 'Redirect successful!')
	res.redirect('/')
})

```

## Rendering Messages

Rendering messages will depend on the view engine. The function "getMessages" will be exposed locally.

This works better than exposing the messages themselves since calling the function lets the module know the messages have been passed off to render so it's safe to delete them from the session.

Example in Pug:

```
- var messages = getMessages()

if messages.notify
	each msg in messages.info
		.info= msg
if messages.error
	each msg in messages.error
		.error= msg
```

