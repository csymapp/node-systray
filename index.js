"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
}) : (function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function (o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function (o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function () { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/tslint/config */
var child = __importStar(require("child_process"));
var path = __importStar(require("path"));
var os = __importStar(require("os"));
var fs = __importStar(require("fs-extra"));
var readline = __importStar(require("readline"));
var pkg = require('./package.json');
function _debug(msgType) {
    var msg = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        msg[_i - 1] = arguments[_i];
    }
    console.log(msgType + ':' + msg.map(function (m) {
        var t = typeof (m) === 'string' ? m : JSON.stringify(m);
        var p = t.indexOf('"icon":');
        if (p >= 0) {
            var e = t.indexOf('"', p + 8);
            t = t.substring(0, p + 8) + '<ICON>' + t.substring(e);
        }
        var limit = 500;
        if (t.length > limit) {
            t = t.substring(0, limit / 2) + '...' + t.substring(t.length - limit / 2);
        }
        return t;
    }).join(' '));
    return;
}
var getTrayBinPath = function (debug, copyDir) {
    if (debug === void 0) { debug = false; }
    if (copyDir === void 0) { copyDir = false; }
    return __awaiter(void 0, void 0, void 0, function () {
        var binName, binPath, copyDistPath, error_1;
        let ret = null
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    binName = ({
                        win32: "tray_windows" + (debug ? '' : '_release') + ".exe",
                        darwin: "tray_darwin" + (debug ? '' : '_release'),
                        linux: "tray_linux" + (debug ? '' : '_release')
                    })[process.platform];
                    binPath = path.join('.', 'traybin', binName);

                    if (process.pkg) {
                        // console.log(ret)
                        let filePath = "./node_modules/systray2/traybin/tray_windows_release.exe"//ret[1];
                        // const fs = require("fs-extra");
                        const path = require("path");
                        let pkgPath = path.join(process.cwd(), "trx.exe")
                        // only if it does not already exist
                        try{
                            if(!fs.pathExistsSync(pkgPath))copySync(filePath, pkgPath)
                        }catch(error){}
                        // ret[1] = pkgPath
                        function copySync(src, dest) {
                            var data = fs.readFileSync(src);
                            fs.writeFileSync(dest, data);
                        }
                        binPath = pkgPath
                        ret = [4 /*yield*/, fs.pathExistsSync(pkgPath), binPath, __dirname];
                    } else

                        ret = [4 /*yield*/, fs.pathExistsSync(binPath), binPath, __dirname];
                    break;
                case 1:
                    if (!(_a.sent())) {
                        binPath = path.join(__dirname, 'traybin', binName);
                    }
                    if (!copyDir) { ret = [3 /*break*/, 8]; break }
                    copyDir = path.join((typeof copyDir === 'string'
                        ? copyDir
                        : os.homedir() + "/.cache/node-systray/"), pkg.version);
                    copyDistPath = path.join(copyDir, binName);
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 7]);
                    ret = [4 /*yield*/, fs.stat(copyDistPath)]; break;
                case 3:
                    _a.sent();
                    ret = [3 /*break*/, 7]; break;
                case 4:
                    error_1 = _a.sent();
                    ret = [4 /*yield*/, fs.ensureDir(copyDir)]; break;
                case 5:
                    _a.sent();
                    ret = [4 /*yield*/, fs.copy(binPath, copyDistPath)]; break;
                case 6:
                    _a.sent();
                    ret = [3 /*break*/, 7]; break;
                case 7: ret = [2 /*return*/, copyDistPath]; break;
                case 8: ret = [2 /*return*/, binPath]; break;
            }
            return ret
        });
    });
};
var CHECK_STR = ' (√)';
function updateCheckedInLinux(item) {
    if (process.platform !== 'linux') {
        return;
    }
    if (item.checked) {
        item.title += CHECK_STR;
    }
    else {
        item.title = (item.title || '').replace(RegExp(CHECK_STR + '$'), '');
    }
    if (item.items != null) {
        item.items.forEach(updateCheckedInLinux);
    }
}
function resolveIcon(item) {
    return __awaiter(this, void 0, void 0, function () {
        var icon, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    icon = item.icon;
                    if (!(icon != null)) return [3 /*break*/, 3];
                    return [4 /*yield*/, fs.pathExists(icon)];
                case 1:
                    if (!_b.sent()) return [3 /*break*/, 3];
                    _a = item;
                    return [4 /*yield*/, loadIcon(icon)];
                case 2:
                    _a.icon = _b.sent();
                    _b.label = 3;
                case 3:
                    if (!(item.items != null)) return [3 /*break*/, 5];
                    return [4 /*yield*/, Promise.all(item.items.map(function (_) { return resolveIcon(_); }))];
                case 4:
                    _b.sent();
                    _b.label = 5;
                case 5: return [2 /*return*/, item];
            }
        });
    });
}
function addInternalId(internalIdMap, item, counter) {
    if (counter === void 0) { counter = { id: 1 }; }
    var id = counter.id++;
    internalIdMap.set(id, item);
    if (item.items != null) {
        item.items.forEach(function (_) { return addInternalId(internalIdMap, _, counter); });
    }
    item.__id = id;
}
function itemTrimmer(item) {
    return {
        title: item.title,
        tooltip: item.tooltip,
        checked: item.checked,
        enabled: item.enabled === undefined ? true : item.enabled,
        hidden: item.hidden,
        items: item.items,
        icon: item.icon,
        isTemplateIcon: item.isTemplateIcon,
        __id: item.__id
    };
}
function menuTrimmer(menu) {
    return {
        icon: menu.icon,
        title: menu.title,
        tooltip: menu.tooltip,
        items: menu.items.map(itemTrimmer),
        isTemplateIcon: menu.isTemplateIcon
    };
}
function actionTrimer(action) {
    if (action.type === 'update-item') {
        return {
            type: action.type,
            item: itemTrimmer(action.item),
            seq_id: action.seq_id
        };
    }
    else if (action.type === 'update-menu') {
        return {
            type: action.type,
            menu: menuTrimmer(action.menu)
        };
    }
    else if (action.type === 'update-menu-and-item') {
        return {
            type: action.type,
            item: itemTrimmer(action.item),
            menu: menuTrimmer(action.menu),
            seq_id: action.seq_id
        };
    }
    else {
        return {
            type: action.type
        };
    }
}
function loadIcon(fileName) {
    return __awaiter(this, void 0, void 0, function () {
        var buffer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fs.readFile(fileName)];
                case 1:
                    buffer = _a.sent();
                    return [2 /*return*/, buffer.toString('base64')];
            }
        });
    });
}
var SysTray = /** @class */ (function () {
    function SysTray(conf) {
        this.internalIdMap = new Map();
        this._conf = conf;
        this._process = null;
        this._rl = null;
        this._binPath = null;
        this._ready = this.init();
    }
    Object.defineProperty(SysTray.prototype, "process", {
        get: function () {
            return this._process;
        },
        enumerable: false,
        configurable: true
    });
    SysTray.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var conf, _a, error_2;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        conf = this._conf;
                        _a = this;
                        return [4 /*yield*/, getTrayBinPath(conf.debug, conf.copyDir)];
                    case 1:
                        _a._binPath = _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, fs.chmod(this._binPath, '+x')];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_2 = _b.sent();
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/, new Promise(function (resolve, reject) {
                        return __awaiter(_this, void 0, void 0, function () {
                            var counter;
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        this._process = child.spawn(this._binPath, [], {
                                            windowsHide: true
                                        });
                                        this._rl = readline.createInterface({
                                            input: this._process.stdout
                                        });
                                        conf.menu.items.forEach(updateCheckedInLinux);
                                        counter = { id: 1 };
                                        conf.menu.items.forEach(function (_) { return addInternalId(_this.internalIdMap, _, counter); });
                                        return [4 /*yield*/, resolveIcon(conf.menu)];
                                    case 1:
                                        _a.sent();
                                        if (conf.debug) {
                                            this._rl.on('line', function (data) { return _debug('onLine', data); });
                                        }
                                        this.onReady(function () {
                                            _this.writeLine(JSON.stringify(menuTrimmer(conf.menu)));
                                            resolve();
                                        });
                                        return [2 /*return*/];
                                }
                            });
                        });
                    })];
                }
                _a._binPath = "kanayo"
            });
        });
    };
    SysTray.prototype.ready = function () {
        return this._ready;
    };
    SysTray.prototype.onReady = function (listener) {
        var _this = this;
        this._rl.on('line', function (line) {
            var action = JSON.parse(line);
            if (action.type === 'ready') {
                listener();
                if (_this._conf.debug) {
                    _debug('onReady', action);
                }
            }
        });
        return this;
    };
    SysTray.prototype.onClick = function (listener) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ready()];
                    case 1:
                        _a.sent();
                        this._rl.on('line', function (line) {
                            var action = JSON.parse(line);
                            if (action.type === 'clicked') {
                                var item = _this.internalIdMap.get(action.__id);
                                action.item = Object.assign(item, action.item);
                                if (_this._conf.debug) {
                                    _debug('onClick', action);
                                }
                                listener(action);
                            }
                        });
                        return [2 /*return*/, this];
                }
            });
        });
    };
    SysTray.prototype.writeLine = function (line) {
        if (line) {
            if (this._conf.debug) {
                _debug('writeLine', line + '\n', '=====');
            }
            this._process.stdin.write(line.trim() + '\n');
        }
        return this;
    };
    SysTray.prototype.sendAction = function (action) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = action.type;
                        switch (_a) {
                            case 'update-item': return [3 /*break*/, 1];
                            case 'update-menu': return [3 /*break*/, 2];
                            case 'update-menu-and-item': return [3 /*break*/, 4];
                        }
                        return [3 /*break*/, 6];
                    case 1:
                        updateCheckedInLinux(action.item);
                        if (action.seq_id == null) {
                            action.seq_id = -1;
                        }
                        return [3 /*break*/, 6];
                    case 2:
                        _b = action;
                        return [4 /*yield*/, resolveIcon(action.menu)];
                    case 3:
                        _b.menu = (_d.sent());
                        action.menu.items.forEach(updateCheckedInLinux);
                        return [3 /*break*/, 6];
                    case 4:
                        _c = action;
                        return [4 /*yield*/, resolveIcon(action.menu)];
                    case 5:
                        _c.menu = (_d.sent());
                        action.menu.items.forEach(updateCheckedInLinux);
                        updateCheckedInLinux(action.item);
                        if (action.seq_id == null) {
                            action.seq_id = -1;
                        }
                        return [3 /*break*/, 6];
                    case 6:
                        if (this._conf.debug) {
                            _debug('sendAction', action);
                        }
                        this.writeLine(JSON.stringify(actionTrimer(action)));
                        return [2 /*return*/, this];
                }
            });
        });
    };
    /**
     * Kill the systray process
     *
     * @param exitNode Exit current node process after systray process is killed, default is true
     */
    SysTray.prototype.kill = function (exitNode) {
        if (exitNode === void 0) { exitNode = true; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                    return __awaiter(_this, void 0, void 0, function () {
                        var error_3;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    this.onExit(function () {
                                        resolve();
                                        if (exitNode) {
                                            process.exit(0);
                                        }
                                    });
                                    return [4 /*yield*/, this.sendAction({
                                        type: 'exit'
                                    })
                                        // this._rl.close();
                                        // this._process.kill();
                                    ];
                                case 1:
                                    _a.sent();
                                    return [3 /*break*/, 3];
                                case 2:
                                    error_3 = _a.sent();
                                    reject(error_3);
                                    return [3 /*break*/, 3];
                                case 3: return [2 /*return*/];
                            }
                        });
                    });
                })];
            });
        });
    };
    SysTray.prototype.onExit = function (listener) {
        this._process.on('exit', listener);
    };
    SysTray.prototype.onError = function (listener) {
        var _this = this;
        this._process.on('error', function (err) {
            if (_this._conf.debug) {
                _debug('onError', err, 'binPath', _this.binPath);
            }
            listener(err);
        });
    };
    Object.defineProperty(SysTray.prototype, "killed", {
        get: function () {
            return this._process.killed;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SysTray.prototype, "binPath", {
        get: function () {
            return this._binPath;
        },
        enumerable: false,
        configurable: true
    });
    SysTray.separator = {
        title: '<SEPARATOR>',
        tooltip: '',
        enabled: true
    };
    return SysTray;
}());
exports.default = SysTray;
//# sourceMappingURL=index.js.map