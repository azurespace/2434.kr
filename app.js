var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
//
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
//
// app.use('/', indexRouter);
// app.use('/users', usersRouter);

map = new Map();
map.set('nagi', ["https://www.youtube.com/channel/UC5ek2GWKvUKFgnKSHuuCFrw", "https://twitter.com/NagiSo2434", "https://www.twitch.tv/lr7llr7l"]);
map.set('gaon', ["https://www.youtube.com/channel/UCpRXCTyNNa-MnjhK6gisnRw", "https://twitter.com/Gaon2434", "https://www.twitch.tv/gaon_2434"]);
map.set('suha', ["https://www.youtube.com/channel/UCUtKkGKef8BYMs3h-3zQm9A", "https://twitter.com/SuhaMin2434", "https://www.twitch.tv/suhamin2434"]);
map.set('chiho', ["https://www.youtube.com/channel/UCJ6LH4jMNy0JN9RSThz1mMQ", "https://twitter.com/HanChiHo2434", "https://www.twitch.tv/chihorahao"]);
map.set('ara', ["https://www.youtube.com/channel/UCmWqYB6y8gSfPONWGspuOWQ", "https://twitter.com/AraChae2434", "https://www.twitch.tv/arachae2434"]);
map.set('siu', ["https://www.youtube.com/channel/UCSlv7Z-4q7_7NRkzJB10A5Q", "https://twitter.com/SiuLee2434", "https://www.twitch.tv/siulee2434"]);
map.set('ray', ["https://www.youtube.com/channel/UC7hffDQLKIEG-_zoAQkMIvg", "https://twitter.com/RayAkira2434", "https://www.twitch.tv/rayakira2434"]);
map.set('roha', ["https://www.youtube.com/channel/UCClwIqTUn5LDpFucHyaAhHg", "https://twitter.com/rohalee2434", "https://www.twitch.tv/rohalee2434"]);
map.set('bora', ["https://www.youtube.com/channel/UC1ZV7KBscK0EMoJKFu1DnDg", "https://twitter.com/BoraNun2434", "https://www.youtube.com/channel/UC1ZV7KBscK0EMoJKFu1DnDg"]);
map.set('nari', ["https://www.youtube.com/channel/UCCHH0nWYXFZmtDS_4tvMxHQ", "https://twitter.com/NariYang2434", "https://www.twitch.tv/nariyang2434"]);
map.set('kiru', ["https://www.youtube.com/channel/UCi6nV5Z2dzFuXBzLG3P9zqQ", "https://twitter.com/KiruShin2434", "https://www.twitch.tv/kirushin2434"]);
map.set('jiyu', ["https://www.youtube.com/channel/UCnzZmBOSrQf2wDBbnsDajVw", "https://twitter.com/JiyuOh2434", "https://www.twitch.tv/jiyuoh2434"]);
map.set('hari', ["https://www.youtube.com/channel/UClS6k3w1sPwlVFqK3-yID5A", "https://twitter.com/HariRyu2434", "https://www.twitch.tv/hariryu2434"]);
map.set('mia', ["https://www.youtube.com/channel/UCyqzU2nq7eGNi4kN0uHx7TA", "https://twitter.com/SongMia2434", "https://www.twitch.tv/songmia2434"]);
map.set('seffyna', ["https://www.youtube.com/channel/UCeGendL8CO5RkffB6IFwHow", "https://twitter.com/Seffyna2434", "https://www.twitch.tv/seffyna2434"]);
map.set('fyna', ["https://www.youtube.com/channel/UCeGendL8CO5RkffB6IFwHow", "https://twitter.com/Seffyna2434", "https://www.twitch.tv/seffyna2434"]);
map.set('ffyna', ["https://www.youtube.com/channel/UCeGendL8CO5RkffB6IFwHow", "https://twitter.com/Seffyna2434", "https://www.twitch.tv/seffyna2434"]);
map.set('hada', ["https://www.youtube.com/channel/UCLjx3lqIkYkPCBJop8czJ2A", "https://twitter.com/BanHada2434", "https://www.twitch.tv/banhada2434"])

for(const [key, value] of map)
{
  app.use("/"+key+"/youtube", function(req, res, next) {
    res.redirect(301, value[0]);
  })

  app.use("/"+key+"/yt", function(req, res, next) {
    res.redirect(301, value[0]);
  })

  app.use("/"+key+"/twitter", function(req, res, next) {
    res.redirect(301, value[1]);
  })
  app.use("/"+key+"/twt", function(req, res, next) {
    res.redirect(301, value[1]);
  })

  app.use("/"+key+"/twitch", function(req, res, next) {
    res.redirect(301, value[2]);
  })

  app.use("/"+key+"/t", function(req, res, next) {
    res.redirect(301, value[2]);
  })

  app.use("/"+key, function(req, res, next) {
    res.redirect(302, value[0]);
  })
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
