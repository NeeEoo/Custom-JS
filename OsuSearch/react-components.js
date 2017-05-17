var Beatmap = React.createClass({displayName: "Beatmap",
var Beatmap = React.createClass({displayName: "Beatmap",
    //Stop other beatmaps if they are playing too
    playAudio: function () {
        var playingIcon = $(React.findDOMNode(this.refs.bmapImage)).find("img");
        if (playingIcon.hasClass("playing")) {
            playingIcon.removeClass("playing");
            playingIcon.attr("src", "/static/search/img/media23.png");
            AudioPlayer.stop();
        } else {
            $(".playing").attr("src", "/static/search/img/media23.png")
            $(".playing").hide();
            $(".playing").removeClass("playing");
            playingIcon.addClass("playing");
            playingIcon.attr("src", "/static/search/img/pause41.png");
            playingIcon.show();
            AudioPlayer.play(this.props.beatmapset_id, function () {
                playingIcon.removeClass("playing");
                playingIcon.attr("src", "/static/search/img/media23.png");
                playingIcon.hide();
            });
        }
    },
    showDetails: function () {
        this.refs.details.showDetails();
    },
    download: function () {
        $("#download").attr("src", "https://osu.ppy.sh/d/" + this.props.beatmapset_id + "n");
    },
    downloadDirect: function () {
        $("#download").attr("src", "osu://dl/" + this.props.beatmapset_id);
    },
    ignoreBeatmap: function (event) {
        if (!global.LOGGED_IN) {
            NotificationManager.displayNotification({
                title: "Log In required!",
                message: 'You need to be logged in to ignore beatmaps. <a href="/register">Click here to log in / register.</a>',
                className: "black"
            });
            return;
        }
        if (!this.state.ignored) {
            $.get("/account/update/ignored_beatmaps/add", { ignored_beatmap: this.props.beatmapset_id }, function (response) {
                var json = JSON.parse(response);
                if (json.success) {
                    $(React.findDOMNode(this.refs.ignoreButton)).attr("title", "Click to remove from ignored beatmapsets.");
                    this.setState({ ignored: !this.state.ignored });
                    NotificationManager.displayNotification({
                        title: "Successfully ignored a beatmapset",
                        message: "You have ignored [" + this.props.beatmapset_id + "] " + this.props.artist + " - " + this.props.title +
                                ". To undo click again or edit from your account settings.",
                        className: "green",
                        uniqueIdentifier: "ignore",
                        fadeOut: 4500
                    });
                } else {
                    NotificationManager.displayNotification({
                        title: "Error while ignoring beatmapset",
                        message: "Error while trying to ignore [" + this.props.beatmapset_id + "] " + this.props.artist + " - " + this.props.title +
                                " Error message: " + json.error,
                        className: "error"
                    });
                    console.log(response);
                }
            }.bind(this));
        } else {
            $.get("/account/update/ignored_beatmaps/remove", { ignored_beatmap: this.props.beatmapset_id }, function (response) {
                var json = JSON.parse(response);
                if (json.success) {
                    $(React.findDOMNode(this.refs.ignoreButton)).attr("title", "Click to add to ignored beatmapsets.");
                    this.setState({ ignored: !this.state.ignored });
                    NotificationManager.displayNotification({
                        title: "Successfully unignored a beatmapset",
                        message: "You have unignored [" + this.props.beatmapset_id + "] " + this.props.artist + " - " + this.props.title +
                                ". To ignore click again or edit from your account settings.",
                        className: "blue",
                        uniqueIdentifier: "ignore",
                        fadeOut: 4500
                    });
                } else {
                    NotificationManager.displayNotification({
                        title: "Error while ignoring beatmapset",
                        message: "Error while trying to ignore [" + this.props.beatmapset_id + "] " + this.props.artist + " - " + this.props.title +
                                " Error message: " + json.error,
                        className: "error"
                    });
                    console.log(response);
                }
            }.bind(this));
        }
    },
    formatPlayTime: function (playTime) {
        var minutes = Math.floor(playTime / 60);
        var seconds = playTime - minutes * 60;
        var timeString = "";
        if (minutes < 10) {
            timeString += "0" + minutes;
        } else {
            timeString += minutes;
        }
        timeString += ":";
        if (seconds < 10) {
            timeString += "0" + seconds;
        } else {
            timeString += seconds;
        }
        return timeString;
    },
    formatDateString: function (date) {
        var days = date.getDate();
        if (days < 10)
            days = "0" + days;
        var months = date.getMonth() + 1;
        if (months < 10)
            months = "0" + months;
        return date.getFullYear() + "-" + months + "-" + days;
    },
    componentDidMount: function () {
        var bmapImage = $(React.findDOMNode(this.refs.bmapImage));
        bmapImage.hover(function () {
            bmapImage.find("img:not(.playing)").show();
        }, function () {
            bmapImage.find("img:not(.playing)").hide();
        });
    },
    getInitialState: function () {
        return { ignored: this.props.ignored };
    },
    render: function () {
        var imageStyle = {
            "background": "url('//b.ppy.sh/thumb/" + this.props.beatmapset_id + "l.jpg') no-repeat center",
            "backgroundSize": "contain",
            "backgroundPosition": "center center"
        };
        var dateString = this.formatDateString(this.props.date);
        var ranking = "";
        if ([1, 2].indexOf(this.props.beatmap_status) != -1)
            ranking = "ranked";
        else if (this.props.beatmap_status == 3)
            ranking = "qualified";
        else
            ranking = "unranked";
        var gamemode = "";
        var gamemodeImg = "";
        switch (this.props.gamemode) {
            case 0:
                gamemode = "Standard";
                gamemodeImg = "mode-osu-small.png"
                break;
            case 1:
                gamemode = "Taiko";
                gamemodeImg = "mode-taiko-small.png"
                break;
            case 2:
                gamemode = "Catch the Beat";
                gamemodeImg = "mode-fruits-small.png"
                break;
            case 3:
                gamemode = "Mania";
                gamemodeImg = "mode-mania-small.png"
                break;
        }
        var displayLanguage = "";
        switch (this.props.language) {
            case "Instrumental":
                displayLanguage = "Instrum";
                break;
            case "Japanese":
                displayLanguage = "Japan";
                break;
            default:
                displayLanguage = this.props.language;
        }
        var displayGenre = "";
        switch (this.props.genre) {
            case "Electronic":
                displayGenre = "Electr";
                break;
            default:
                displayGenre = this.props.genre;
        }
        var lengthString = this.formatPlayTime(this.props.play_length);
        return (
            React.createElement("div", {className: "column beatmap " + ranking}, 
                React.createElement("div", {className: "ui grid"}, 
                    React.createElement("div", {className: "row"}, 
                        React.createElement("div", {className: "six wide column black beatmap-image", style: imageStyle, onClick: this.playAudio, ref: "bmapImage"}, 
                            React.createElement("img", {className: "beatmap-playing-icon", src: "/static/search/img/media23.png"})
                        ), 
                        React.createElement("div", {className: "ten wide column beatmap-info"}, 
                            React.createElement("div", {className: "row truncate beatmap-title-row"}, 
                                React.createElement("img", {src: "/static/search/img/" + gamemodeImg, className: "beatmap-gamemode-icon"}), 
                                React.createElement("div", {className: "truncate beatmap-title", title: this.props.title}, 
                                    React.createElement("a", {className: "subtle", href: "http://osu.ppy.sh/b/" + this.props.beatmap_id, target: "_blank"}, this.props.title)
                                )
                            ), 
                            React.createElement("div", {className: "row truncate"}, 
                                React.createElement("img", {src: "/static/search/img/microphone52.png", className: "beatmap-data-icon", alt: "beatmap artist", title: "Artist"}), 
                                React.createElement("span", {title: this.props.artist}, 
                                    this.props.artist
                                )
                            ), 
                            React.createElement("div", {className: "row truncate"}, 
                                React.createElement("img", {src: "/static/search/img/users81.png", className: "beatmap-data-icon", alt: "beatmap mapper", title: "Mapper and Difficulty"}), 
                                React.createElement("span", {title: this.props.difficulty_name}, 
                                    React.createElement("a", {className: "no-style subtle", href: "http://osu.ppy.sh/u/" + this.props.mapper, target: "_blank"}, this.props.mapper), 
                                    React.createElement("span", {className: "beatmap-diffname"}, "[", this.props.difficulty_name, "]")
                                )
                            ), 
                            React.createElement("div", {className: "row"}, 
                                React.createElement("img", {src: "/static/search/img/clock141.png", className: "beatmap-data-icon", alt: "beatmap length", title: "Playable length"}), 
                                React.createElement("span", {title: "Playable length"}, lengthString)
                            ), 
                            React.createElement("div", {className: "row"}, 
                                React.createElement("img", {src: "/static/search/img/calendar146.png", className: "beatmap-data-icon", alt: "beatmap date", title: "Date ranked or last updated"}), 
                                React.createElement("span", {title: "Date approved or last update if unranked"}, dateString)
                            ), 
                            React.createElement("div", {className: "row truncate"}, 
                                React.createElement("img", {src: "/static/search/img/internet60.png", className: "beatmap-data-icon", alt: "beatmap source", title: "Source"}), 
                                React.createElement("span", {title: this.props.source}, this.props.source)
                            )
                        )
                    ), 
                    React.createElement("div", {className: this.props.details == true ? "row beatmap-difficulties" : "row beatmap-difficulties not-detailed"}, 
                        React.createElement("a", {className: "ui yellow label", title: "Star difficulty"}, 
                            "S", 
                            React.createElement("div", {className: "detail"}, Math.round(this.props.difficulty * 100) / 100)
                        ), 
                        React.createElement("a", {className: "ui green label", title: "Approach rate"}, 
                            "AR", 
                            React.createElement("div", {className: "detail"}, this.props.difficulty_ar)
                        ), 
                        React.createElement("a", {className: "ui olive label priority-2", title: "Overall difficulty"}, 
                            "OD", 
                            React.createElement("div", {className: "detail"}, this.props.difficulty_od)
                        ), 
                        React.createElement("a", {className: "ui orange label priority-3", title: "Circle size"}, 
                            "CS", 
                            React.createElement("div", {className: "detail"}, this.props.difficulty_cs)
                        ), 
                        React.createElement("a", {className: "ui violet label priority-4", title: "Health drain"}, 
                            "HP", 
                            React.createElement("div", {className: "detail"}, this.props.difficulty_hp)
                        ), 
                        React.createElement("a", {className: "ui blue label", title: "Beats per minute"}, 
                            "BPM", 
                            React.createElement("div", {className: "detail"}, this.props.bpm)
                        ), 
                         this.props.details == true ?
                            ""
                            :
                            React.createElement("i", {className: "ellipsis horizontal icon beatmap-extra", onClick: this.showDetails, title: "View whole set and more details"}, 
                             this.props.map_count > 1 ?
                                React.createElement("span", {className: "beatmap-count"}, this.props.map_count)
                              : ""
                            
                        )
                        
                    ), 
                    React.createElement("div", {className: "row beatmap-tags"}, 
                        React.createElement("a", {className: "ui white label", title: "Favorites: " + this.props.favorites}, 
                            React.createElement("i", {className: "heart icon"}), 
                            formatBigNumber(this.props.favorites)
                        ), 
                        React.createElement("a", {className: "ui white label", title: "Play count: " + this.props.play_count}, 
                            React.createElement("i", {className: "play icon"}), 
                            formatBigNumber(this.props.play_count)
                        ), 
                        React.createElement("span", null, 
                            React.createElement("a", {className: "ui blue tag label language", title: "Language: " + this.props.language}, displayLanguage), 
                            React.createElement("a", {className: "ui tag label priority-2", title: "Genre: " + this.props.genre}, displayGenre)
                        ), 
                         global.IS_ADMIN == true ?
                            React.createElement("div", {className: "beatmap-icon-container"}, 
                                React.createElement("a", {className: "no-style", target: "_blank", href: "/radio/?play=" + this.props.beatmapset_id, title: "Don't even try."}, React.createElement("i", {className: "music icon beatmap-icon"})), 
                                React.createElement("i", {className: "download icon beatmap-icon download-beatmap", onClick: this.download, title: "Download with osu! website"}), 
                                React.createElement("i", {className: "cloud download icon beatmap-icon", onClick: this.downloadDirect, title: "Download with osu!direct"}), 
                                React.createElement("i", {className: (this.state.ignored ? "checkmark " : "ban ") + "icon beatmap-icon", ref: "ignoreButton", onClick: this.ignoreBeatmap, 
                                    title: this.state.ignored ? "Click to remove from ignored beatmaps." : "Click to add to ignored beatmaps."})
                            )
                            :
                            React.createElement("div", {className: "beatmap-icon-container"}, 
                                React.createElement("i", {className: "download icon beatmap-icon download-beatmap", onClick: this.download, title: "Download with osu! website"}), 
                                React.createElement("i", {className: "cloud download icon beatmap-icon", onClick: this.downloadDirect, title: "Download with osu!direct"}), 
                                React.createElement("i", {className: (this.state.ignored ? "checkmark " : "ban ") + "icon beatmap-icon", ref: "ignoreButton", onClick: this.ignoreBeatmap, 
                                    title: this.state.ignored ? "Click to remove from ignored beatmaps." : "Click to add to ignored beatmaps."})
                            )
                        
                    )
                ), 
            React.createElement(BeatmapDetails, React.__spread({ref: "details"},  this.props))
            )
        );
    }
});
var BeatmapDetails = React.createClass({displayName: "BeatmapDetails",
    showDetails: function () {
        var modal = $(React.findDOMNode(this.refs.modal));
        if (this.state.beatmaps.length > 0) {
            modal.modal("show");
        } else {
            $(React.findDOMNode(this.refs.loader)).show();
            modal.modal("show");
            $.get("/getset/?beatmapset_id=" + this.props.beatmapset_id, function (response) {
                var beatmaps = JSON.parse(response);
                beatmaps = beatmaps.map(function (bmap) {
                    if (bmap.source == "")
                        bmap.source = "No source"
                    if (bmap.genre == "")
                        bmap.genre = "No data"
                    if (bmap.language == "")
                        bmap.language = "No data"
                    //Convert date string to date object
                    bmap.date = new Date(bmap.date);
                    return bmap;
                });
                beatmaps = beatmaps.sort(function (a, b) {
                    return b["difficulty"] - a["difficulty"];
                });
                $(React.findDOMNode(this.refs.loader)).hide();
                this.setState({ beatmaps: beatmaps });
            }.bind(this));
        }
    },
    componentDidMount: function () {
        if (this.isMounted()) {
            var modal = $(React.findDOMNode(this.refs.modal));
            modal.css("max-height", $(window).height() * 0.85 + "px");
            var that = this;
            modal.modal({
                detachable: false,
                observeChanges: true
            });
        }
    },
    getInitialState: function () {
        return { beatmaps: [] };
    },
    render: function () {
        return (
            React.createElement("div", {className: "ui modal beatmap-details", ref: "modal"}, 
                React.createElement("div", {className: "header"}, this.props.artist, " - ", this.props.title), 
                React.createElement("div", {className: "content"}, 
                    React.createElement("div", {className: "loader-container", ref: "loader"}, 
                        React.createElement("div", {className: "ui active large inline loader"})
                    ), 
                    
                        this.state.beatmaps.map(function (beatmap) {
                            beatmap.details = true;
                            return React.createElement(Beatmap, React.__spread({key: beatmap.beatmap_id},  beatmap))
                        })
                    
                )
            )
        );
    }
});
var ButtonFields = React.createClass({displayName: "ButtonFields",
    getData: function () {
        var genreDiv = $(React.findDOMNode(this.refs.genres));
        var languagesDiv = $(React.findDOMNode(this.refs.languages));
        var statusesDiv = $(React.findDOMNode(this.refs.statuses));
        var modesDiv = $(React.findDOMNode(this.refs.modes));
        
        var selectedGenres = genreDiv.find(".selected").map(function () {
            return $(this).attr("data-value");
        }).get().join(",");
        var selectedLanguages = languagesDiv.find(".selected").map(function () {
            return $(this).attr("data-value");
        }).get().join(",");
        var selectedStatuses = statusesDiv.find(".selected").map(function () {
            return $(this).attr("data-value");
        }).get().join(",");
        var selectedModes = modesDiv.find(".selected").map(function () {
            return $(this).attr("data-value");
        }).get().join(",");
        var data = {};
        if (selectedGenres.length > 0 && genreDiv.find(".selected").length < genreDiv.find(".select-button").length) 
            data["genres"] = selectedGenres;
        if (selectedLanguages.length > 0 && languagesDiv.find(".selected").length < languagesDiv.find(".select-button").length)
            data["languages"] = selectedLanguages;
        if (selectedStatuses.length > 0 && statusesDiv.find(".selected").length < statusesDiv.find(".select-button").length)
            data["statuses"] = selectedStatuses;
        if (selectedModes.length > 0 && modesDiv.find(".selected").length < modesDiv.find(".select-button").length)
            data["modes"] = selectedModes;
        return data;
    },
    setData: function (selectedButtons) {
        function capitalize(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
        selectedButtons.forEach(function (buttonText) {
            if (buttonText)
                $('.select-button:contains("' + capitalize(buttonText) + '")').addClass("selected");
        });
    },
    resetDefault: function () {
        $(".select-button.selected").removeClass("selected");
    },
    toggleActive: function (event) {
       $(event.target).toggleClass("selected");
    },
    render: function () {
        return (
            React.createElement("div", {className: "ui grid genreslanguages"}, 
                React.createElement("div", {className: "row field-row", ref: "genres"}, 
                    React.createElement("div", {className: "column"}, 
                        React.createElement("h2", null, "Genre"), 
                        React.createElement("div", {className: "search-field"}, 
                            React.createElement("button", {className: "ui basic button select-button", onClick: this.toggleActive, "data-value": "Anime"}, "Anime"), 
                            React.createElement("button", {className: "ui basic button select-button", onClick: this.toggleActive, "data-value": "Video Game"}, "Video Game"), 
                            React.createElement("button", {className: "ui basic button select-button", onClick: this.toggleActive, "data-value": "Novelty"}, "Novelty"), 
                            React.createElement("button", {className: "ui basic button select-button", onClick: this.toggleActive, "data-value": "Electronic"}, "Electronic"), 
                            React.createElement("button", {className: "ui basic button select-button", onClick: this.toggleActive, "data-value": "Pop"}, "Pop"), 
                            React.createElement("button", {className: "ui basic button select-button", onClick: this.toggleActive, "data-value": "Rock"}, "Rock"), 
                            React.createElement("button", {className: "ui basic button select-button", onClick: this.toggleActive, "data-value": "Hip Hop"}, "Hip Hop"), 
                            React.createElement("button", {className: "ui basic button select-button", onClick: this.toggleActive, "data-value": "Other"}, "Other"), 
                            React.createElement("button", {className: "ui basic button select-button", onClick: this.toggleActive, "data-value": "Any"}, "Any")
                        )
                    )
                ), 
                React.createElement("div", {className: "row field-row", ref: "languages"}, 
                    React.createElement("div", {className: "column"}, 
                        React.createElement("h2", null, "Language"), 
                        React.createElement("div", {className: "search-field"}, 
                            React.createElement("button", {className: "ui basic button select-button", onClick: this.toggleActive, "data-value": "Japanese"}, "Japanese"), 
                            React.createElement("button", {className: "ui basic button select-button", onClick: this.toggleActive, "data-value": "Instrumental"}, "Instrumental"), 
                            React.createElement("button", {className: "ui basic button select-button", onClick: this.toggleActive, "data-value": "English"}, "English"), 
                            React.createElement("button", {className: "ui basic button select-button", onClick: this.toggleActive, "data-value": "Korean"}, "Korean"), 
                            React.createElement("button", {className: "ui basic button select-button", onClick: this.toggleActive, "data-value": "Chinese"}, "Chinese"), 
                            React.createElement("button", {className: "ui basic button select-button", onClick: this.toggleActive, "data-value": "German"}, "German"), 
                            React.createElement("button", {className: "ui basic button select-button", onClick: this.toggleActive, "data-value": "Spanish"}, "Spanish"), 
                            React.createElement("button", {className: "ui basic button select-button", onClick: this.toggleActive, "data-value": "Italian"}, "Italian"), 
                            React.createElement("button", {className: "ui basic button select-button", onClick: this.toggleActive, "data-value": "French"}, "French"), 
                            React.createElement("button", {className: "ui basic button select-button", onClick: this.toggleActive, "data-value": "Other"}, "Other"), 
                            React.createElement("button", {className: "ui basic button select-button", onClick: this.toggleActive, "data-value": "Any"}, "Any")
                        )
                    )
                ), 
                React.createElement("div", {className: "row field-row", ref: "statuses"}, 
                    React.createElement("div", {className: "column"}, 
                        React.createElement("h2", null, "Ranking"), 
                        React.createElement("div", {className: "search-field"}, 
                            React.createElement("button", {className: "ui basic button select-button", onClick: this.toggleActive, "data-value": "Ranked"}, "Ranked"), 
                            React.createElement("button", {className: "ui basic button select-button", onClick: this.toggleActive, "data-value": "Qualified"}, "Qualified"), 
                            React.createElement("button", {className: "ui basic button select-button", onClick: this.toggleActive, "data-value": "Unranked"}, "Unranked")
                        )
                    )
                ), 
                React.createElement("div", {className: "row field-row", ref: "modes"}, 
                    React.createElement("div", {className: "column"}, 
                        React.createElement("h2", null, "Gamemode"), 
                        React.createElement("div", {className: "search-field"}, 
                            React.createElement("button", {className: "ui basic button select-button", onClick: this.toggleActive, "data-value": "Standard"}, "Standard"), 
                            React.createElement("button", {className: "ui basic button select-button", onClick: this.toggleActive, "data-value": "Mania"}, "Mania"), 
                            React.createElement("button", {className: "ui basic button select-button", onClick: this.toggleActive, "data-value": "Taiko"}, "Taiko"), 
                            React.createElement("button", {className: "ui basic button select-button", onClick: this.toggleActive, "data-value": "CtB"}, "CtB")
                        )
                    )
                )
            )
        );
    }
});
var DateFields = React.createClass({displayName: "DateFields",
    getData: function () {
        var startDate = this.refs.start.getData();
        var endDate = this.refs.end.getData();
        var data = {};
        if (startDate)
            data["date_start"] = startDate;
        if (endDate)
            data["date_end"] = endDate;
        return data;
    },
    setData: function (fields) {
        Object.keys(fields).forEach(function (key) {
            this.refs[key].setData(fields[key]);
        }.bind(this));
    },
    resetDefault: function () {
        this.refs.start.resetDefault();
        this.refs.end.resetDefault();
    },
    render: function () {
        return (
            React.createElement("div", {className: "ui grid"}, 
                React.createElement(DatePicker, {which: "Start", ref: "start"}), 
                React.createElement(DatePicker, {which: "End", ref: "end"})
            )
        );
    }
});
var DatePicker = React.createClass({displayName: "DatePicker",
    getData: function () {
        var dateField = $(React.findDOMNode(this.refs.datepicker));
        if (dateField.DatePickerGetDate().getTime() != this.state.current.getTime())
            return dateField.DatePickerGetDate(true);
    },
    setData: function (data) {
        var dateField = $(React.findDOMNode(this.refs.datepicker));
        dateField.DatePickerSetDate(data);
        dateField.val(data);
    },
    resetDefault: function () {
        var dateField = $(React.findDOMNode(this.refs.datepicker));
        dateField.DatePickerSetDate(this.state.current);
        dateField.val("");
    },
    getInitialState: function () {
        return {
            current: new Date()
        };
    },
    componentDidMount: function () {
        var dateField = $(React.findDOMNode(this.refs.datepicker));
        dateField.DatePicker({
            format:'Y-m-d',
            date: this.state.current,
            current: this.state.current,
            starts: 1,
            view: "years",
            onChange: function(formated, dates){
                dateField.val(formated);
            }
        });
    },
    render: function () {
        return (
            React.createElement("div", {className: "three wide computer six wide tablet eight wide mobile column ui input"}, 
                React.createElement("label", null, 
                    this.props.which, " date", 
                    React.createElement("input", {className: "date", type: "text", placeholder: this.props.which + " date", ref: "datepicker"})
                )
            )
        );
    }
});
var DifficultyFields = React.createClass({displayName: "DifficultyFields",
    getData: function () {
        var difficultyRawData = [
            this.refs.star.getData(),
            this.refs.ar.getData(),
            this.refs.od.getData(),
            this.refs.cs.getData(),
            this.refs.hp.getData()
        ];
        var difficultyData = {};
        difficultyRawData.forEach(function (data) {
            if (data.start > 0 || data.end < 10) {
                difficultyData[data.diffName] = "(" + data.start + "," + data.end + ")";
            }
        });
        return difficultyData;
    },
    setData: function (fields) {
        Object.keys(fields).forEach(function (key) {
            this.refs[key].setData(fields[key]);
        }.bind(this));
    },
    resetDefault: function () {
        ["star", "ar", "od", "cs", "hp"].forEach(function (ref) {
            this.refs[ref].resetDefault();
        }.bind(this));
    },
    render: function () {
        return (
            React.createElement("div", {className: "ui five column doubling grid"}, 
                React.createElement("div", {className: "column"}, 
                    React.createElement(DifficultyPicker, {diffName: "Star", min: "0", max: "10", step: "0.05", ref: "star"})
                ), 
                React.createElement("div", {className: "column"}, 
                    React.createElement(DifficultyPicker, {diffName: "AR", min: "0", max: "10", step: "0.05", ref: "ar"})
                ), 
                React.createElement("div", {className: "column"}, 
                    React.createElement(DifficultyPicker, {diffName: "OD", min: "0", max: "10", step: "0.05", ref: "od"})
                ), 
                React.createElement("div", {className: "column"}, 
                    React.createElement(DifficultyPicker, {diffName: "CS", min: "0", max: "10", step: "0.05", ref: "cs"})
                ), 
                React.createElement("div", {className: "column"}, 
                    React.createElement(DifficultyPicker, {diffName: "HP", min: "0", max: "10", step: "0.05", ref: "hp"})
                )
            )
        );
    }
});
var DifficultyPicker = React.createClass({displayName: "DifficultyPicker",
    getData: function () {
        return {
            diffName: this.props.diffName.toLowerCase(),
            start: this.state.start,
            end: this.state.end
        }
    },
    setData: function (data) {
        var slider = React.findDOMNode(this.refs.slider);
        slider.noUiSlider.set([data.start, data.end]);
        this.setState({
            start: data.start,
            end: data.end
        });
    },
    resetDefault: function () {
        var slider = React.findDOMNode(this.refs.slider);
        slider.noUiSlider.set([this.state.min, this.state.max]);
        this.setState(this.getInitialState());
    },
    getInitialState: function () {
        return {
            min: parseInt(this.props.min),
            max: parseInt(this.props.max),
            start: parseInt(this.props.min),
            end: parseInt(this.props.max)
        };
    },
    componentDidMount: function () {
        var slider = React.findDOMNode(this.refs.slider);
        var startInput = $(React.findDOMNode(this.refs.startInput));
        var endInput = $(React.findDOMNode(this.refs.endInput));
        var that = this;
        noUiSlider.create(slider, {
            start: [ parseInt(this.props.min), parseInt(this.props.max) ],
            step: parseFloat(this.props.step),
            connect: true,
            range: {
                'min':  parseInt(this.props.min),
                'max':  parseInt(this.props.max)
            }
        });
        slider.noUiSlider.on('update', function( values, handle ) {
            var value = values[handle];
            if (handle) {
                that.setState({end: value});
                endInput.val(value);
            } else {
                that.setState({start: value});
                startInput.val(value);
            }
        });
        startInput.change(function () {
            that.setState({start: $(this).val()});
            slider.noUiSlider.set([$(this).val(), null]);
        });
        endInput.change(function () {
            that.setState({end: $(this).val()});
            slider.noUiSlider.set([null, $(this).val()]);
        });
    },
    render: function () {
        return (
            React.createElement("div", {className: "column difficulty"}, 
                React.createElement("div", {className: "row title-row"}, 
                    React.createElement("div", {className: "title difficulty"}, 
                        this.props.diffName
                    )
                ), 
                React.createElement("div", {className: "row slider-row"}, 
                    React.createElement("div", {ref: "slider"})
                ), 
                React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "ui two column doubling grid"}, 
                        React.createElement("div", {className: "column diff-input"}, 
                            React.createElement("div", {className: "ui fluid input"}, 
                                React.createElement("input", {className: "diff-input", ref: "startInput", type: "text", placeholder: "Start"})
                            )
                        ), 
                        React.createElement("div", {className: "column diff-input"}, 
                            React.createElement("div", {className: "ui fluid input"}, 
                                React.createElement("input", {className: "diff-input", ref: "endInput", type: "text", placeholder: "End"})
                            )
                        )
                    )
                )
            )
        );
    }
});
var Footer = React.createClass({displayName: "Footer",
    render: function () {
        return (
            React.createElement("div", {className: "ui centered grid", id: "footer"}, 
                React.createElement("div", {className: "twelve wide column"}, 
                    React.createElement("p", null, 
                        "Made by ", React.createElement("a", {href: "https://osu.ppy.sh/u/Rivenation", target: "_blank"}, 
                            "Rivenation."
                        )
                    ), 
                    React.createElement("p", null, 
                        React.createElement("div", null, "Beatmap icons made by ", React.createElement("a", {href: "http://www.flaticon.com/authors/freepik", title: "Freepik"}, "Freepik"), " from ", React.createElement("a", {href: "http://www.flaticon.com", title: "Flaticon"}, "www.flaticon.com"), " is licensed by ", React.createElement("a", {href: "http://creativecommons.org/licenses/by/3.0/", title: "Creative Commons BY 3.0"}, "CC BY 3.0")), 
                        "This website is not affiliated with ", React.createElement("a", {href: "https://osu.ppy.sh/", target: "_blank"}, "osu.ppy.sh"), "."
                    )
                )
            )
        );
    }
}); 

var InfiniteScroll = React.createClass({displayName: "InfiniteScroll",
    getInitialState: function () {
        return { 
            infiniteEnabled: localStorage.getItem("infiniteEnabled") != "false", 
            visible: false,
            empty: false,
            loading: false,
            resultCount: -1
        };
    },
    toggleInfinite: function () {
        localStorage.setItem("infiniteEnabled", !this.state.infiniteEnabled);
        this.setState({ infiniteEnabled: !this.state.infiniteEnabled });
    },
    manualLoad: function () {
        this.props.manualLoadCallback();
    },
    formatMapAmount: function (mapAmount) {
        return mapAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    render: function () {
        var buttonText = this.state.infiniteEnabled == true ? "[Disable]" : "[Enable]";
        return (
            React.createElement("div", {className: "one column row"}, 
                React.createElement("div", {className: "column infinite"}, 
                    
                        this.state.visible == true ?
                            React.createElement("span", null, 
                                
                                    this.state.loading == true ?
                                        React.createElement("div", {className: "loader-container", ref: "loader"}, 
                                            React.createElement("div", {className: "ui active small inline loader"})
                                        )
                                    :
                                        React.createElement("span", null, 
                                            
                                                this.state.empty == true ?
                                                    React.createElement("span", null, "No more beatmaps to load!")
                                                :
                                                    React.createElement("span", null, "Scroll down to load more beatmaps ", React.createElement("a", {onClick: this.toggleInfinite}, buttonText), 
                                                    React.createElement("a", {onClick: this.manualLoad}, "[Next]"))
                                            
                                        )
                                
                            )
                        : "", 
                    
                    
                        this.state.resultCount > -1 ?
                            React.createElement("div", {className: "result-count"}, 
                                React.createElement("strong", null, this.formatMapAmount(this.state.resultCount)), " more beatmaps found."
                            )
                        :
                            ""
                    
                )
            )
        );
    }
});
var MiscFields = React.createClass({displayName: "MiscFields",
	getData: function () {
		function parseLengthString(s) {
			var parts = s.toString().split(/(,|\.)/);
			if (parts.length == 3) {
				var minutes = parseInt(parts[0]);
				var seconds = parseInt(parts[2]);
				if (seconds == 5) { //If user enters 1.5 they probably want 1min30s
					seconds = 30;
				} else if (seconds < 10) { //if user enters 1.4 they probably want 1min40s
					seconds = seconds * 10;
				}
				return 60 * minutes + seconds;
			} else {
				return parseInt(s);
			}
		}
		completeData = {};
		["length", "favorites", "play_count", "bpm"].forEach(function (ref) {
			var data = this.refs[ref].getData();
			if (data.hasOwnProperty("min")) {
				if (ref == "length") {
					completeData["min_" + ref] = parseLengthString(data.min);
				} else {
					completeData["min_" + ref] = data.min;
				}
			}
			if (data.hasOwnProperty("max")) {
				if (ref == "length") {
					completeData["max_" + ref] = parseLengthString(data.max);
				} else {
					completeData["max_" + ref] = data.max;
				}
			}
		}.bind(this));
		return completeData;
	},
	setData: function (fields) {
		Object.keys(fields).forEach(function (key) {
            this.refs[key].setData(fields[key]);
        }.bind(this));
	},
	resetDefault: function () {
	    ["length", "favorites", "play_count", "bpm"].forEach(function (ref) {
	        this.refs[ref].resetDefault();
	    }.bind(this));
	},
	render: function () {
		return (
			React.createElement("div", {className: "ui four column doubling grid"}, 
		        React.createElement(RangeField, {ref: "length", name: "Length"}), 
		        React.createElement(RangeField, {ref: "bpm", name: "BPM"}), 
		        React.createElement(RangeField, {ref: "favorites", name: "Favorites"}), 
		        React.createElement(RangeField, {ref: "play_count", name: "Play count"})
			)
		);
	}
});
var OrderFields = React.createClass({displayName: "OrderFields",
    getData: function () {
        var orderPicker = this.refs.orderPicker;
        var order = orderPicker.state.reverse ? "-" + orderPicker.state.order : orderPicker.state.order;
        if (order != global.DEFAULT_SORT)
            return { query_order: order };
    },
    setData: function (data) {
        this.refs.orderPicker.setState({ order: data["order"], reverse: data["reverse"] });
    },
    resetDefault: function (data) {
        this.refs.orderPicker.setState({
            order: global.DEFAULT_SORT,
            reverse: false
        });
    },
    render: function () {
        return (
            React.createElement(OrderPicker, {order: "date", direction: "downward", ref: "orderPicker"})
        );
    }
});
var OrderPicker = React.createClass({displayName: "OrderPicker",
    getInitialState: function () {
        return { reverse: false, order: this.props.order };
    },
    toggleReverse: function () {
        this.setState({ reverse: !this.state.reverse });
    },
    componentDidMount: function () {
        var order = $(React.findDOMNode(this.refs.order));
        if (order) {
            var that = this;
            order.dropdown({
                direction: this.props.direction,
                onChange: function (value) {
                    this.setState({
                        order: value
                    });
                }.bind(this)
            });
            order.dropdown("set selected", this.state.order);
        }
    },
    componentDidUpdate: function () {
        if (this.isMounted()) {
            var order = $(React.findDOMNode(this.refs.order));
            order.dropdown("set selected", this.state.order);
        }
    },
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement("div", null, "Order by"), 
                React.createElement("div", {className: "ui selection compact dropdown", ref: "order"}, 
                    React.createElement("input", {name: "order", type: "hidden"}), " ", React.createElement("i", {className: "dropdown icon"}), 
                    React.createElement("div", {className: "default text"}, 
                        "Order by"
                    ), 
                    React.createElement("div", {className: "menu"}, 
                        React.createElement("div", {className: "item", "data-value": "date"}, 
                            "Date"
                        ), 
                        React.createElement("div", {className: "item", "data-value": "difficulty"}, 
                            "Star"
                        ), 
                        React.createElement("div", {className: "item", "data-value": "favorites"}, 
                            "Favorites"
                        ), 
                        React.createElement("div", {className: "item", "data-value": "play_length"}, 
                            "Length"
                        ), 
                        React.createElement("div", {className: "item", "data-value": "play_count"}, 
                            "Play count"
                        ), 
                        React.createElement("div", {className: "item", "data-value": "difficulty_ar"}, 
                            "AR"
                        ), 
                        React.createElement("div", {className: "item", "data-value": "difficulty_od"}, 
                            "OD"
                        ), 
                        React.createElement("div", {className: "item", "data-value": "difficulty_cs"}, 
                            "CS"
                        ), 
                        React.createElement("div", {className: "item", "data-value": "difficulty_hp"}, 
                            "HP"
                        ), 
                        React.createElement("div", {className: "item", "data-value": "bpm"}, 
                            "BPM"
                        )
                    )
                ), 
                React.createElement("div", {className: "ui toggle checkbox"}, 
                       this.state.reverse == true ?
                            React.createElement("input", {type: "checkbox", ref: "reverseCheckbox", onClick: this.toggleReverse, checked: "true"})
                        :
                            React.createElement("input", {type: "checkbox", ref: "reverseCheckbox", onClick: this.toggleReverse}), 
                    
                    React.createElement("label", null, "Reverse")
                )
            )
        );
    }
});

var PremiumMapperFields = React.createClass({displayName: "PremiumMapperFields",
    getData: function () {
        var data = {
            premium_mappers: this.refs.premiumMappers.checked || false
        };
        return data;
    },
    setData: function (usePremiumMappers) {
        this.refs.premiumMappers.checked = usePremiumMappers;
    },
    resetDefault: function () {
        this.refs.premiumMappers.checked = false;
    },
    render: function () {
        return (
            React.createElement("div", {className: "ui checkbox"}, 
                React.createElement("input", {type: "checkbox", ref: "premiumMappers"}), 
                React.createElement("label", null, "Premium mappers only")
            )
        );
    }
});
var PremiumMappersFields = React.createClass({displayName: "PremiumMappersFields",
    getData: function () {
        var data = {};
        if (React.findDOMNode(this.refs.premiumMappers).checked)
            data.premium_mappers = true;
        return data;
    },
    setData: function (usePremiumMappers) {
        React.findDOMNode(this.refs.premiumMappers).checked = usePremiumMappers;
    },
    resetDefault: function () {
        React.findDOMNode(this.refs.premiumMappers).checked = false;
    },
    render: function () {
        return (
            React.createElement("div", {className: "ui checkbox premium-mappers", title: "Only show beatmaps whose mapper has created at least 1 ranked map."}, 
                React.createElement("input", {type: "checkbox", ref: "premiumMappers"}), 
                React.createElement("label", null, "Premium mappers only")
            )
        );
    }
});
var RangeField = React.createClass({displayName: "RangeField",
    getData: function () {
        var minString = React.findDOMNode(this.refs.min).value
        var maxString = React.findDOMNode(this.refs.max).value
        var min = parseFloat(minString);
        var max = parseFloat(maxString);
        var data = {};
        if (!isNaN(min) && min > 0)
            data["min"] = min;
        if (!isNaN(max) && max > 0)
            data["max"] = max;
        return data;
    },
    setData: function (fields) {
        Object.keys(fields).forEach(function (key) {
            React.findDOMNode(this.refs[key]).value = fields[key];
        }.bind(this));
    },
    resetDefault: function () {
        React.findDOMNode(this.refs.min).value = "";
        React.findDOMNode(this.refs.max).value = "";
    },
    render: function () {
        return (
            React.createElement("div", {className: "column"}, 
                React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "title misc-title difficulty"}, 
                        this.props.name
                    )
                ), 
                React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "ui two column doubling grid"}, 
                        React.createElement("div", {className: "column diff-input"}, 
                            React.createElement("div", {className: "ui fluid input"}, 
                                React.createElement("input", {className: "diff-input", ref: "min", type: "number", placeholder: "Min value"})
                            )
                        ), 
                        React.createElement("div", {className: "column diff-input"}, 
                            React.createElement("div", {className: "ui fluid input"}, 
                                React.createElement("input", {className: "diff-input", ref: "max", type: "number", placeholder: "Max value"})
                            )
                        )
                    )
                )
            )
        );
    }
});
var SearchForm = React.createClass({displayName: "SearchForm",
    buildQuery: function () {
        var textFieldsData = this.refs.textFields.getData();
        var buttonFieldsData = this.refs.buttonFields.getData();
        var dateFieldsData = this.refs.dateFields.getData();
        var miscFieldsData = this.refs.miscFields.getData();
        var difficultyData = this.refs.difficultyFields.getData();
        var orderFieldsData = this.refs.orderFields.getData();
        var premiumMappersData = this.refs.premiumMappersFields.getData();

        var searchData = jQuery.extend(textFieldsData, buttonFieldsData,
            dateFieldsData, difficultyData, miscFieldsData, orderFieldsData,
            premiumMappersData);
        var searchQuery = jQuery.param(searchData);
        return "?" + searchQuery;
    },
    getOrder: function () {
        return this.refs.orderFields.getData();
    },
    setSelected: function (fields) {
        Object.keys(fields).forEach(function (key) {
            this.refs[key].setData(fields[key]);
        }.bind(this));
    },
    resetDefault: function () {
        ["textFields", "buttonFields", "dateFields", "miscFields", "difficultyFields", "orderFields"].forEach(function (ref) {
            this.refs[ref].resetDefault();
        }.bind(this));
    },
    render: function () {
        return (
            React.createElement("div", {className: "ui fluid grid search-form"}, 
                React.createElement("div", {className: "row field-row"}, 
                    React.createElement("div", {className: "column"}, 
                        React.createElement("h2", null, "Info"), 
                        React.createElement("div", {className: "search-field"}, 
                            React.createElement(TextFields, {ref: "textFields"})
                        )
                    )
                ), 
                React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "column"}, 
                        React.createElement(ButtonFields, {ref: "buttonFields"})
                    )
                ), 
                React.createElement("div", {className: "row field-row"}, 
                    React.createElement("div", {className: "column"}, 
                        React.createElement("h2", null, "Date"), 
                        React.createElement("div", {className: "search-field"}, 
                            React.createElement(DateFields, {ref: "dateFields"})
                        )
                    )
                ), 
                React.createElement("div", {className: "row field-row"}, 
                    React.createElement("div", {className: "column"}, 
                        React.createElement("h2", null, "Other"), 
                        React.createElement("div", {className: "search-field"}, 
                            React.createElement(MiscFields, {ref: "miscFields"})
                        )
                    )
                ), 
                React.createElement("div", {className: "row field-row"}, 
                    React.createElement("div", {className: "column"}, 
                        React.createElement("h2", null, "Difficulty"), 
                        React.createElement("div", {className: "search-field"}, 
                            React.createElement(DifficultyFields, {ref: "difficultyFields"})
                        )
                    )
                ), 
                React.createElement("div", {className: "row field-row"}, 
                    React.createElement("div", {className: "column"}, 
                        React.createElement("h2", {title: "Order in which the server returns the maps, eg. choosing date will return newest beatmaps matching your query."}, "Query order"), 
                        React.createElement("div", {className: "search-field"}, 
                            React.createElement(OrderFields, {ref: "orderFields"})
                        )
                    )
                ), 
                React.createElement("div", {className: "row field-row"}, 
                    React.createElement("div", {className: "column"}, 
                        React.createElement("div", {className: "search-field"}, 
                            React.createElement(PremiumMappersFields, {ref: "premiumMappersFields"})
                        )
                    )
                )
            )
        );
    }
});
var SearchResults = React.createClass({displayName: "SearchResults",
    setBeatmaps: function (beatmaps) {
        this.setState({
            beatmaps: beatmaps
        });
        this.sortBeatmaps(this.state.order);
    },
    addBeatmaps: function (beatmaps) {
        this.setState({
            beatmaps: this.state.beatmaps.concat(beatmaps)
        });
    },
    setOrder: function (order) {
        var reverse = order[0] == "-";
        var state = {
            reverse: reverse,
            order: order
        }
        if (reverse) {
            state.order = state.order.replace("-", "");
        }
        this.setState(state, function () {
            this.sortBeatmaps(this.state.order);
        }.bind(this));
    },
    sortBeatmaps: function (order) {
        var sortedBmaps = this.state.beatmaps.sort(function (a, b) {
            if (this.state.reverse)
                return a[order] - b[order]
            else
                return b[order] - a[order];
        }.bind(this));
        var state = {
            order: order,
            beatmaps: sortedBmaps,
            shareLink: this.state.shareLink
        };
        var reversePrefix = this.state.reverse ? "-" : "";
        var orderGroups = /&order=(-?\w+)/.exec(this.state.shareLink);
        var queryOrderGroups = /query_order=(-?\w+)/.exec(this.state.shareLink);
        if (!queryOrderGroups || queryOrderGroups[1] != reversePrefix + order) {
            if (orderGroups && order == "date" && !this.state.reverse)
                state.shareLink = this.state.shareLink.replace(orderGroups[0], "");
            else if (orderGroups && (order != "date" || this.state.reverse))
                state.shareLink = this.state.shareLink.replace(orderGroups[1], reversePrefix + order);
            else if (!orderGroups && (order != "date" || this.state.reverse))
                state.shareLink = this.state.shareLink + "&order=" + reversePrefix + order;
        }
        //Development hack
        if (window.location.origin.indexOf("127.0.0.1") != -1)
            state.shareLink = state.shareLink.replace("osusearch.com", "127.0.0.1:8000");
        window.history.pushState("", window.location.host, state.shareLink);
        this.setState(state);
    },
    toggleTips: function () {
        var chevron = $(React.findDOMNode(this.refs.chevron));
        var tips = $(React.findDOMNode(this.refs.tips));
        if (tips.is(":visible")) {
            chevron.removeClass("down").addClass("right");
            tips.hide();
            localStorage.setItem("tipsDisabled", true);
        }
        else {
            chevron.removeClass("right").addClass("down");
            localStorage.setItem("tipsDisabled", false);
            tips.show();
        }
    },
    toggleReverse: function () {
        this.setState({
            reverse: !this.state.reverse
        }, function () {
            this.sortBeatmaps(this.state.order);
        });
    },
    downloadAll: function () {
        function download(dlLinks) {
            if (dlLinks.length == 0) {
                this.setState({ downloading: false });
            } else if (this.state.downloading) {
                var dl = [].pop.call(dlLinks);
                dl.click();
                setTimeout(function () {
                    download.bind(this)(dlLinks);
                }.bind(this), 10);
            }
        }
        if (!global.LOGGED_IN) {
            NotificationManager.displayNotification({
                title: "Log In required!",
                message: 'You need to be logged in to use this feature. <a href="/register">Click here to log in / register.</a>',
                className: "black"
            });
            return;
        }
        if (this.state.downloading) {
            this.setState({ downloading: false });
        } else {
            this.setState({ downloading: true }, function () {
                var dlLinks = $(".download-beatmap");
                [].reverse.call(dlLinks); //Reverse so that Array.pop works as intended
                download.bind(this)(dlLinks);
            }.bind(this));
        }
    },
    selectShareLink: function () {
        $(React.findDOMNode(this.refs.shareLink)).select();
    },
    componentDidUpdate: function () {
        var order = $(React.findDOMNode(this.refs.order));
        if (order) {
            var that = this;
            order.dropdown({
                direction: "downward",
                onChange: function (value) {
                    that.sortBeatmaps(value);
                }
            });
            order.dropdown("set selected", this.state.order);
        }
    },
    getInitialState: function () {
        return { beatmaps: [], order: "date", reverse: false, shareLink: "", downloading: false };
    },
    render: function () {
        var hiddenStyle = {
            display: "none"
        };
        var beatmapsPerRow = $(window).width() > 1540 ? "three" : "two";
        return (
            React.createElement("div", null, 
                  this.state.beatmaps.length > 0 ?
                    React.createElement("div", {className: "row search-results-bar"}, 
                        React.createElement("div", {className: "ui grid"}, 
                            React.createElement("div", {className: "five wide computer eight wide tablet sixteen wide mobile column order-column"}, 
                                React.createElement("div", null, 
                                    React.createElement("div", null, "Order by"), 
                                    React.createElement("div", {className: "ui selection compact dropdown result-order", ref: "order"}, 
                                        React.createElement("input", {name: "order", type: "hidden"}), " ", React.createElement("i", {className: "dropdown icon"}), 
                                        React.createElement("div", {className: "default text"}, 
                                            "Order by"
                                        ), 
                                        React.createElement("div", {className: "menu"}, 
                                            React.createElement("div", {className: "item", "data-value": "date"}, 
                                                "Date"
                                            ), 
                                            React.createElement("div", {className: "item", "data-value": "favorites"}, 
                                                "Favorites"
                                            ), 
                                            React.createElement("div", {className: "item", "data-value": "play_count"}, 
                                                "Play count"
                                            ), 
                                            React.createElement("div", {className: "item", "data-value": "play_length"}, 
                                                "Length"
                                            ), 
                                            React.createElement("div", {className: "item", "data-value": "difficulty"}, 
                                                "Star"
                                            ), 
                                            React.createElement("div", {className: "item", "data-value": "difficulty_ar"}, 
                                                "AR"
                                            ), 
                                            React.createElement("div", {className: "item", "data-value": "difficulty_od"}, 
                                                "OD"
                                            ), 
                                            React.createElement("div", {className: "item", "data-value": "difficulty_cs"}, 
                                                "CS"
                                            ), 
                                            React.createElement("div", {className: "item", "data-value": "difficulty_hp"}, 
                                                "HP"
                                            ), 
                                            React.createElement("div", {className: "item", "data-value": "bpm"}, 
                                                "BPM"
                                            )
                                        )
                                    ), 
                                    React.createElement("div", {className: "ui toggle checkbox"}, 
                                           this.state.reverse == true ?
                                                React.createElement("input", {type: "checkbox", ref: "reverseCheckbox", onClick: this.toggleReverse, checked: "true"})
                                            :
                                                React.createElement("input", {type: "checkbox", ref: "reverseCheckbox", onClick: this.toggleReverse}), 
                                        
                                        React.createElement("label", null, "Reverse")
                                    ), 
                                    
                                        global.USE_INFINITE_SCROLL ?
                                            React.createElement("button", {className: "disabled ui button", title: "Disable infinite scroll in options to use this."}, "DL All")
                                        :
                                            React.createElement("button", {className: this.state.downloading ? "black ui button" : "pink ui button", 
                                                title: "Click to download these 18 maps (5s delay per download)", onClick: this.downloadAll}, 
                                                this.state.downloading ? "Cancel DL" : "DL All")
                                    
                                )
                            ), 
                            React.createElement("div", {className: "seven wide computer twelve wide tablet sixteen wide mobile column share-column"}, 
                                React.createElement("div", null, "Share results"), 
                                React.createElement("div", {className: "ui fluid input"}, 
                                    React.createElement("input", {type: "text", value: this.state.shareLink, onClick: this.selectShareLink, ref: "shareLink", readOnly: true})
                                )
                            )
                        )
                    )
                    : "", 
                
                React.createElement("div", {className: "ui " + beatmapsPerRow + " column stackable doubling grid beatmap-list", ref: "beatmapContainer"}, 
                    
                        this.state.beatmaps.map(function (beatmap) {
                            return React.createElement(Beatmap, React.__spread({key: beatmap.beatmap_id},  beatmap))
                        })
                    
                )
            )
        );
    }
});
var Site = React.createClass({displayName: "Site",
    search: function (callback) {
        var searchButton = $(React.findDOMNode(this.refs.searchButton));
        if (!this.state.order) {
            var formOrder = this.refs.searchForm.getOrder();
            if (formOrder) {
                this.setState({
                    order: formOrder["query_order"]
                });
            }
        }
        try {
            var offset = this.state.offset > 0 ? "&offset=" + this.state.offset : "";
            var url = "/query/" + this.state.query + offset;
            searchButton.addClass("loading");
            if (this.state.offset > 0)
                this.refs.infiniteScroll.setState({
                    visible: true,
                    empty: false,
                    loading: true
                });
            else
                this.refs.infiniteScroll.setState({
                    empty: false,
                    visible: false
                })
            console.log(decodeURIComponent(url));
            $.get(url, function (response) {
                var json = JSON.parse(response);
                beatmaps = json["beatmaps"].map(function (bmap) {
                    if (bmap.source == "")
                        bmap.source = "No source"
                    if (bmap.genre == "")
                        bmap.genre = "No data"
                    else if (bmap.genre == "Video Game")
                        bmap.genre = "Game"
                    if (bmap.language == "")
                        bmap.language = "No data"
                    //Convert date string to date object
                    bmap.date = new Date(bmap.date);
                    return bmap;
                });
                //Build share link
                var shareLink = "http://" + window.location.host + "/search/";
                if (this.state.query.length > 2)
                    shareLink += decodeURIComponent(this.state.query);
                if (this.state.order) {
                    this.refs.searchResults.setOrder(this.state.order);
                    this.setState({ order: null });
                }
                this.refs.searchResults.setState({shareLink: shareLink});
                if (global.USE_INFINITE_SCROLL) {
                    if (this.state.offset > 0) {
                        this.refs.searchResults.addBeatmaps(beatmaps);
                    } else {
                        this.scrollToResults();
                        this.refs.searchResults.setBeatmaps(beatmaps);
                    }
                } else {
                    this.scrollToResults();
                    this.refs.searchResults.setBeatmaps(beatmaps);
                }
                //Handle infinite scroll
                var infiniteScrollState = {
                    loading: false,
                    visible: true,
                    empty: beatmaps.length < 18
                };
                if (beatmaps.length < 18)
                    infiniteScrollState.resultCount = 0;
                else if (this.state.offset == 0)
                    infiniteScrollState.resultCount = parseInt(json["result_count"]) - 18;
                else
                    infiniteScrollState.resultCount = this.refs.infiniteScroll.state.resultCount - beatmaps.length;
                this.refs.infiniteScroll.setState(infiniteScrollState);
                this.setState({
                    noMoreMaps: beatmaps.length < 18,
                    offset: this.state.offset + 1
                });
                searchButton.removeClass("loading");
                if (callback)
                    callback();
            }.bind(this))
            .fail(function (response) {
                searchButton.removeClass("loading");
                NotificationManager.displayNotification({
                    title: "Server error while searching",
                    message: 'Error while trying to execute query: <a target="_blank" href="'+url+'">'+ url +'</a>',
                    className: "error"
                });
            });
        } catch (error) {
            searchButton.removeClass("loading");
            NotificationManager.displayNotification({
                title: "Error searching",
                message: 'Error message: ' + error.toString(),
                className: "error"
            });
        }
    },
    //Convert query string to an object that we use to set SearchForm state
    queryToFieldObject: function (query) {
        function addToObject(baseKey, key, value) {
            if (!fieldObject.hasOwnProperty(baseKey))
                fieldObject[baseKey] = {};
            fieldObject[baseKey][key] = value;
        }
        var parameters = query.split("&");
        var fieldObject = {
            miscFields: {
                favorites: {
                    min: "",
                    max: ""
                },
                length: {
                    min: "",
                    max: ""
                },
                play_count: {
                    min: "",
                    max: ""
                },
                bpm: {
                    min: "",
                    max: ""
                }
            }
        };
        parameters.forEach(function (param) {
            if (param.indexOf("=") == -1)
                return;
            if (param[0] == "?")
                param = param.replace("?", "");
            var parts = param.split("=");
            var fieldName = parts[0];
            var fieldValue = parts[1];
            if (["genres", "languages", "modes", "statuses"].indexOf(fieldName) != -1) {
                values = fieldValue.split(",").map(function (value) {
                    return value.split("+").join(" ");
                });
                if (!fieldObject.hasOwnProperty("buttonFields"))
                    fieldObject["buttonFields"] = values
                else
                    fieldObject["buttonFields"] = fieldObject["buttonFields"].concat(values);
            } else if (["star", "ar", "od", "cs", "hp", "bpm"].indexOf(fieldName) != -1) {
                var groups = /\((.*),(.*)\)/.exec(fieldValue);
                if (groups) {
                    if (!fieldObject.hasOwnProperty("difficultyFields"))
                        fieldObject["difficultyFields"] = {};
                    addToObject("difficultyFields", fieldName, { start: groups[1], end: groups[2] });
                }
            } else {
                switch (fieldName) {
                    case "artist":
                        addToObject("textFields", "artist", fieldValue.replace(/\+/g, " "));
                        break;
                    case "title":
                        addToObject("textFields", "title", fieldValue.replace(/\+/g, " "));
                        break;
                    case "source":
                        addToObject("textFields", "source", fieldValue.replace(/\+/g, " "));
                        break;
                    case "mapper":
                        addToObject("textFields", "mapper", fieldValue.replace(/\+/g, " "));
                        break;
                    case "diff_name":
                        addToObject("textFields", "diffName", fieldValue.replace(/\+/g, " "));
                        break;
                    case "date_start":
                        addToObject("dateFields", "start", fieldValue);
                        break;
                    case "date_end":
                        addToObject("dateFields", "end", fieldValue);
                        break;
                    case "min_length":
                        fieldObject["miscFields"]["length"]["min"] = fieldValue;
                        break;
                    case "max_length":
                        fieldObject["miscFields"]["length"]["max"] = fieldValue;
                        break;
                    case "min_favorites":
                        fieldObject["miscFields"]["favorites"]["min"] = fieldValue;
                        break;
                    case "max_favorites":
                        fieldObject["miscFields"]["favorites"]["max"] = fieldValue;
                        break;
                    case "min_play_count":
                        fieldObject["miscFields"]["play_count"]["min"] = fieldValue;
                        break;
                    case "max_play_count":
                        fieldObject["miscFields"]["play_count"]["max"] = fieldValue;
                        break;
                    case "min_bpm":
                        fieldObject["miscFields"]["bpm"]["min"] = fieldValue;
                        break;
                    case "max_bpm":
                        fieldObject["miscFields"]["bpm"]["max"] = fieldValue;
                        break;
                    case "query_order":
                        if (fieldValue.indexOf("-") != -1)
                            fieldObject["orderFields"] = { order: fieldValue.replace("-", ""), reverse: true };
                        else
                            fieldObject["orderFields"] = { order: fieldValue, reverse: false };
                        break;
                    case "premium_mappers":
                        bool = fieldValue.toLowerCase() == "true";
                        fieldObject["premiumMappersFields"] = bool;
                        break;
                }
            }
        });
        return fieldObject;
    },
    loadFromQuery: function (query) {
        var order = undefined;
        query = query.split("&amp;").join("&");
        if (query.indexOf("&order=") != -1) {
            var nextParam = query.indexOf("&", query.indexOf("&order=")+"&order=".length);
            if (nextParam != -1)
                order = query.substring(query.indexOf("&order=") + ("&order=".length), nextParam)
            else
                order = query.substring(query.indexOf("&order=") + ("&order=".length));
            query = query.replace("&order=" + order, "");
        }
        this.refs.searchForm.setSelected(this.queryToFieldObject(query));
        this.setState({
            query: query,
            order: order
        }, function () {
            this.search(function () {
                this.scrollToResults();
            }.bind(this));
        }.bind(this));
    },
    scrollToResults: function () {
        var colHeight = parseInt($(".search-button-column").css("height").replace("px", ""));
        var navbarHeight = parseInt($(".navbar").css("height").replace("px", ""));
        var margin = 15;
        $("html, body").animate({
            scrollTop: $(".search-button-column").offset().top - navbarHeight + colHeight + margin
        }, 0);
    },
    manualInfiniteScrollClick: function () {
        this.search();
    },
    searchButtonClick: function () {
        this.setState({ offset: 0, query: this.refs.searchForm.buildQuery()}, function () {
            this.search();
        }.bind(this));
    },
    resetButtonClick: function () {
        this.refs.searchForm.resetDefault();
    },
    getInitialState: function () {
        return { offset: 0, query: "", noMoreMaps: false };
    },
    componentDidMount: function () {
        $(document).keyup(function (event) {
            if (event.which == 13 && $(".diff-input:focus").length == 0) {
                this.setState({ offset: 0, query: this.refs.searchForm.buildQuery() }, function () {
                    this.search(function () {
                        this.scrollToResults();
                    }.bind(this));
                }.bind(this));
            }
        }.bind(this));
        $(".item.go-up").click(function () {
            $(".item.go-up").hide();
            $("html, body").animate({
                scrollTop: 0
            }, 0);
        });
        var lastOffset = 0;
        $(window).scroll(function() {
            var extraPixels = navigator.userAgent.toLowerCase().indexOf('firefox') > -1 ? 15 : 0;
            if ($(window).scrollTop()+extraPixels >= $(document).height() - $(window).height()
                && this.state.offset != lastOffset && !this.state.noMoreMaps && this.refs.infiniteScroll.state.infiniteEnabled) {
                lastOffset = this.state.offset;
                this.search();
            } else if ($(".column.beatmap").length > 0 && $(window).scrollTop() > $(".column.beatmap:first").offset().top) {
                $(".item.go-up").fadeIn();
            } else {
                $(".item.go-up").hide();
            }
        }.bind(this));
    },
    render: function () {
        return (
            React.createElement("div", {className: "content centered fourteen wide computer fifteen wide mobile column"}, 
                React.createElement(SearchForm, {ref: "searchForm"}), 
                React.createElement("div", {className: "ui centered grid search-button"}, 
                    React.createElement("div", {className: "twelve wide computer fourteen wide mobile column"}, 
                        React.createElement("div", {className: "ui grid search-button-column"}, 
                            React.createElement("div", {className: "thirteen wide computer sixteen wide mobile column"}, 
                                React.createElement("button", {className: "large fluid pink ui button", onClick: this.searchButtonClick, ref: "searchButton"}, "Search!")
                            ), 
                            React.createElement("div", {className: "three wide computer sixteen wide mobile column"}, 
                                React.createElement("button", {className: "large fluid purple ui button", onClick: this.resetButtonClick}, "Reset")
                            )
                        )
                    )
                ), 
                React.createElement(SearchResults, {ref: "searchResults"}), 
                React.createElement(InfiniteScroll, {ref: "infiniteScroll", manualLoadCallback: this.manualInfiniteScrollClick}), 
                React.createElement(Footer, null)
            )
        );
    }
});
var TextFields = React.createClass({displayName: "TextFields",
    getData: function () {
        var title = React.findDOMNode(this.refs.title).value.trim();
        var artist = React.findDOMNode(this.refs.artist).value.trim();
        var source = React.findDOMNode(this.refs.source).value.trim();
        var mapper = React.findDOMNode(this.refs.mapper).value.trim();
        var diffName = React.findDOMNode(this.refs.diffName).value.trim();
        var data = {};
        if (title) 
            data["title"] = title;
        if (artist) 
            data["artist"] = artist;
        if (source) 
            data["source"] = source;
        if (mapper)
            data["mapper"] = mapper;
        if (diffName)
            data["diff_name"] = diffName;
        return data;

    },
    setData: function (fields) {
        Object.keys(fields).forEach(function (key) {
            React.findDOMNode(this.refs[key]).value = fields[key];
        }.bind(this));
    },
    resetDefault: function () {
        ["title", "artist", "source", "mapper"].forEach(function (ref) {
            React.findDOMNode(this.refs[ref]).value = "";
        }.bind(this));
    },
    render: function () {
        return (
            React.createElement("div", {className: "ui five column doubling grid"}, 
                React.createElement("div", {className: "ui column input"}, 
                    React.createElement("div", {className: "ui fluid input"}, 
                        React.createElement("label", null, 
                            "Song title", 
                            React.createElement("input", {type: "text", placeholder: "Song title", ref: "title"})
                        )
                    )
                ), 
                React.createElement("div", {className: "ui column input"}, 
                    React.createElement("label", null, 
                        "Song artist", 
                        React.createElement("input", {type: "text", placeholder: "Song artist", ref: "artist"})
                    )
                ), 
                React.createElement("div", {className: "ui column input"}, 
                    React.createElement("label", null, 
                        "Song source", 
                        React.createElement("input", {type: "text", placeholder: "Song source", ref: "source"})
                    )
                ), 
                React.createElement("div", {className: "ui column input"}, 
                    React.createElement("label", null, 
                        "Mapper", 
                        React.createElement("input", {type: "text", placeholder: "Mapper", ref: "mapper"})
                    )
                ), 
                React.createElement("div", {className: "ui column input"}, 
                    React.createElement("label", null, 
                        "Difficulty name", 
                        React.createElement("input", {type: "text", placeholder: "Difficulty name", ref: "diffName"})
                    )
                )
            )
        );
    }
});