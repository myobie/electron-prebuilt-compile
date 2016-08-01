#!/usr/bin/env node
'use strict';

var _electronPrebuilt = require('electron-prebuilt');

var _electronPrebuilt2 = _interopRequireDefault(_electronPrebuilt);

var _child_process = require('child_process');

var _child_process2 = _interopRequireDefault(_child_process);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var params = [require.resolve('./es6-init')].concat(process.argv.slice(2));

var child = _child_process2.default.spawn(_electronPrebuilt2.default, params, { stdio: 'inherit' });
child.on('close', function (code) {
  return process.exit(code);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFJLFNBQVMsQ0FBQyxRQUFRLE9BQVIsQ0FBZ0IsWUFBaEIsQ0FBRCxFQUFnQyxNQUFoQyxDQUF1QyxRQUFRLElBQVIsQ0FBYSxLQUFiLENBQW1CLENBQW5CLENBQXZDLENBQWI7O0FBRUEsSUFBSSxRQUFRLHdCQUFLLEtBQUwsNkJBQXFCLE1BQXJCLEVBQTZCLEVBQUMsT0FBTyxTQUFSLEVBQTdCLENBQVo7QUFDQSxNQUFNLEVBQU4sQ0FBUyxPQUFULEVBQWtCLFVBQUMsSUFBRDtBQUFBLFNBQVUsUUFBUSxJQUFSLENBQWEsSUFBYixDQUFWO0FBQUEsQ0FBbEIiLCJmaWxlIjoiY2xpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmltcG9ydCBlbGVjdHJvbiBmcm9tICdlbGVjdHJvbi1wcmVidWlsdCc7XG5pbXBvcnQgcHJvYyBmcm9tICdjaGlsZF9wcm9jZXNzJztcblxubGV0IHBhcmFtcyA9IFtyZXF1aXJlLnJlc29sdmUoJy4vZXM2LWluaXQnKV0uY29uY2F0KHByb2Nlc3MuYXJndi5zbGljZSgyKSk7XG5cbmxldCBjaGlsZCA9IHByb2Muc3Bhd24oZWxlY3Ryb24sIHBhcmFtcywge3N0ZGlvOiAnaW5oZXJpdCd9KTtcbmNoaWxkLm9uKCdjbG9zZScsIChjb2RlKSA9PiBwcm9jZXNzLmV4aXQoY29kZSkpO1xuIl19