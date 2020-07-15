'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var tslib_1 = require('tslib');
var typeNameConvertor_1 = require('./typeNameConvertor');
var defaultOptions = {
    indentChar: ' ',
    indentSize: 4,
    normalizeTypeName: typeNameConvertor_1.normalizeTypeName
};
var WriteProcessor = (function () {
    function WriteProcessor(options) {
        this.indent = 0;
        this.results = '';
        this.alreadyIndentThisLine = false;
        this.options = tslib_1.__assign(tslib_1.__assign({}, defaultOptions), options);
    }
    WriteProcessor.prototype.clear = function () {
        this.indent = 0;
        this.results = '';
        this.alreadyIndentThisLine = false;
    };
    WriteProcessor.prototype.output = function (str) {
        this.doIndent();
        this.results += str;
        return this;
    };
    WriteProcessor.prototype.outputType = function (type, primitive) {
        if (primitive === void 0) {
            primitive = false;
        }
        type = this.options.normalizeTypeName(type, primitive);
        this.output(type);
        return this;
    };
    WriteProcessor.prototype.outputKey = function (name, optional) {
        if (optional === void 0) {
            optional = false;
        }
        if (/[^0-9A-Za-z_$]/.test(name) || /^\d/.test(name)) {
            this.output('"' + name + '"');
        } else {
            this.output(name);
        }
        if (optional) {
            this.output('');
        }
        return this;
    };
    WriteProcessor.prototype.outputLine = function (str) {
        this.doIndent();
        if (str) {
            this.output(str);
        }
        this.output('\n');
        this.alreadyIndentThisLine = false;
        return this;
    };
    WriteProcessor.prototype.protectComment = function (str) {
        return str.replace(/\*\//g, '*\u200B/');
    };
    WriteProcessor.prototype.outputJSDoc = function () {
        var e_1, _a;
        var _this = this;
        var comments = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            comments[_i] = arguments[_i];
        }
        var lines = [];
        comments
            .filter(function (comment) {
                return comment != null;
            })
            .map(function (comment) {
                if (typeof comment === 'string') {
                    return comment;
                } else {
                    return JSON.stringify(comment, null, 2);
                }
            })
            .map(function (comment) {
                return comment.split('\n').map(function (line) {
                    return _this.protectComment(line);
                });
            })
            .forEach(function (ls) {
                lines = lines.concat(ls);
            });
        if (lines.length > 0) {
            this.outputLine('/**');
            try {
                for (
                    var lines_1 = tslib_1.__values(lines), lines_1_1 = lines_1.next();
                    !lines_1_1.done;
                    lines_1_1 = lines_1.next()
                ) {
                    var line = lines_1_1.value;
                    this.output(' * ').outputLine(line);
                }
            } catch (e_1_1) {
                e_1 = { error: e_1_1 };
            } finally {
                try {
                    if (lines_1_1 && !lines_1_1.done && (_a = lines_1.return)) _a.call(lines_1);
                } finally {
                    if (e_1) throw e_1.error;
                }
            }
            this.outputLine(' */');
        }
        return this;
    };
    WriteProcessor.prototype.doIndent = function () {
        if (!this.alreadyIndentThisLine) {
            var indent = this.getIndent();
            this.results += indent;
            this.alreadyIndentThisLine = true;
        }
        return this;
    };
    Object.defineProperty(WriteProcessor.prototype, 'indentLevel', {
        get: function () {
            return this.indent;
        },
        enumerable: false,
        configurable: true
    });
    WriteProcessor.prototype.increaseIndent = function () {
        this.indent++;
        return this;
    };
    WriteProcessor.prototype.decreaseIndent = function () {
        this.indent--;
        return this;
    };
    WriteProcessor.prototype.getIndent = function () {
        return this.repeatString(this.indent * this.options.indentSize, this.options.indentChar);
    };
    WriteProcessor.prototype.repeatString = function (n, s) {
        var result = '';
        for (var i = 0; i < n; i++) {
            result += s;
        }
        return result;
    };
    WriteProcessor.prototype.toDefinition = function () {
        return this.results;
    };
    return WriteProcessor;
})();
exports.default = WriteProcessor;
//# sourceMappingURL=writeProcessor.js.map