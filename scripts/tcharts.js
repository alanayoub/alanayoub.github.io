(function (arr) {
    var args, width;
    arr.forEach(function (val, idx) {
        args = arr[idx];
        width = args.css && args.css.width;
        $chart = $('<div>').addClass('aa-chart').css({width: width}).appendTo('.AA-tcharts');
        // $('<div class="AA-description"><div>' + args.label + '</div><br /><div>' + args.description + '</div></div>').appendTo($chart);
        $('<div class="chart">')
            .attr('id', 'group-' + idx)
            .css(args.css || {})
            .appendTo($chart)
            .wrap('<div class="container" />');
        Raphael('group-' + idx).tcharts_Bar(args.data, args.options);
    });
})([
    //
    //
    //
    {
        label: 'Complex nested stacked grouped bars',
        description: 'Lots of labels, custom formatters',
        css: {
            width: '1024px', height: '500px'
        },
        data: [
            [19421, 26460, 25362, 25322, 27324, -57632, -74830, -98290],
            [14359, 23430, 22334, 15333, 37553, -27233, -82870, -88594],
            [17445, 18409, 22335, 35553, 27232, -37443, -54849, -98478],
            [12446, 14441, 22333, 15443, 37432, -27234, -61871, -98475],
            [14478, 26444, 23322, 35434, 37433, -37343, -53830, -88359],
            [14254, 13433, 23333, 25743, 27232, -27533, -64853, -98342],
            [14067, 23468, 22321, 35222, 27322, -37322, -56804, -98018],
            [11413, 15476, 22332, 25232, 27433, -37433, -60837, -98932],
            [19424, 26460, 25362, 25322, 27324, -37633, -64830, -98290],
            [14483, 23430, 22334, 15334, 37553, -27233, -62871, -88594],
            [14746, 18409, 22335, 35553, 27232, -37443, -54849, -98478],
            [12446, 14442, 22334, 15443, 37432, -27234, -61872, -98476],
            [14478, 26445, 23323, 35434, 37433, -37343, -53830, -88359],
            [14254, 13433, 23333, 25753, 27232, -27533, -64853, -98343],
            [14067, 24369, 22321, 35321, 27324, -37322, -56804, -98018],
            [11413, 14576, 22332, 25233, 27433, -37437, -60840, -98933]
        ],
        options: {
            label_color: '#333',
            groups: {
                gap: 20,
                labels: {
                    h1: ['h1.1', 'h1.2'],
                    h2: ['h2.1', 'h2.2 Lorem ipsum dolor sit amet, consectetur adipiscing elit'],
                    h3: ['h3.1', 'h3.2 Lorem ipsum dolor sit amet, consectetur adipiscing elit']
                },
                show: true
            },
            bars: {
                formatters: [
                    function (value, min, max, label) {
                        return label + '\n' + Number(value).toLocaleString()
                    }
                ],
                stacked: true,
                axes_labels: [
                    '1: Lorem ipsum dolor',
                    '2: Lorem ipsum dolor',
                    '3: Lorem ipsum dolor',
                    '4: Lorem ipsum dolor',
                    '5: Lorem ipsum dolor',
                    '6: Lorem ipsum dolor',
                    '7: Lorem ipsum dolor',
                    '8: Lorem ipsum dolor'
                ],
                labels: [
                    'Stack 1', 'Stack 2', 'Stack 3', 'Stack 4', 'Stack 5', 'Stack 6', 'Stack 7', 'Stack 8'
                ],
                format_offset: 1
            },
            xaxis: {
                rotation: -45,
                show: true,
                labels: {truncate: 40}
            },
            yaxes: [
                {
                    show: true,
                    position: 'left',
                    data_start: 0,
                    data_offset: 0,
                    data_offset_type: 'fill'
                }
            ]
        }
    },
    //
    //
    //
    {
        label: 'Non grouped with formatter',
        description: 'More space on the top to accomodate larger labels',
        css: {
            width: '502px', height: '300px'
        },
        data: [
            [10, 12, 15, 25, 40, 27, 22, 13, 11]
        ],
        options: {
            bars: {
                colors: ['#244aa7'],
                color_wrap: 1,
                labels: ['bar 1', 'bar 2', 'bar 3', 'bar 4', 'bar 5', 'bar 6', 'bar 7', 'bar 8', 'bar 9'],
                formatters: [
                    function (value, min, max, label) {
                        return label + '\n' + value + ' Volume'
                    }
                ]
            },
            canvas: {padding: {top: 43}},
            yaxes: [
                {
                    show: true,
                    position: 'left',
                    data_start: 0,
                    data_offset: 1,
                    data_offset_type: 'fill'
                }
            ]
        }
    },
    //
    //
    //
    {
        label: 'Stacked with custom ticks, interval, min and max',
        description: 'Doubled the amount of ticks',
        css: {
            width: '502px', height: '300px'
        },
        data: [
            [1975065, 671522.1000000001,1106036.4000000001],[1975065,612270.15,1165288.3499999999],[2128526,617272.5399999999,1191974.56],
            [2275065, 750771.4500000001,1296787.0499999998],[2975065,892519.5,1725537.7],[2975365,892609.5,1695958.0499999998],
            [3706587, 1149041.97,2112754.59],[4360643,1395405.76,2485566.51],[4723484,1417045.2,2739620.7199999997],
            [5656825, 1866752.25,3337526.75],[7975065,2472270.15,4545787.05],[8033046,2731235.64,4659166.68],
            [8817269, 2557008.01,4937670.640000001],[9319386,2982203.52,5498437.739999999],[9720908,3207899.64,5638126.64],
            [10392395, 3117718.5,6131513.05],[10733629,3220088.6999999997,6225504.819999999],[10981558,3404282.98,6479119.22],
            [11979558, 3474071.82,6708552.48],[12828620,4361730.800000001,7312313.399999999],[14255182,4134002.78,7982901.920000001],
            [14702056, 4704657.92,8527192.479999999],[16109525,4832857.5,9343524.5],[16901616,5577533.28,9971953.44],
            [16948842, 4915164.18,9830328.36],[18139070,5985893.100000001,10702051.299999999],[19731405,6116735.55,11444214.899999999],
            [19826795, 6741110.300000001,11697809.049999999],[23023379,7827948.86,13353559.819999998],[24152534,7245760.2,14249995.059999999],
            [24674547, 7649109.57,14064491.79],[26202888,7860866.399999999,14935646.159999998],[27875899,8362769.699999999,15889262.429999998],
            [28009773, 8963127.36,15685472.88],[28493350,9687739,15956276.000000002],[28970650,9850021,16223564.000000002],
            [29742065, 9220040.15,17547818.349999998],[29750265,9817587.450000001,17255153.7],[29975065,9592020.8,17685288.349999998],
            [30664369, 10119241.77,17172046.64],[32634748,10769466.84,18601806.36],[34193181,9916022.49,19832044.98],
            [35026195, 10858120.45,19614669.200000003],[35900999,10770299.7,20104559.44],[38609965,13127388.100000001,22007680.049999997],
            [38700421, 12771138.93,22446244.18],[38878748,12441199.36,21772098.880000003],[38887445,12832856.850000001,22554718.099999998],
            [45581213, 14585988.16,26892915.669999998],[48699645,14122897.049999999,27758797.65]
        ],
        options: {
            label_color: '#333',
            groups: {
                gap: 1,
                labels: {},
                show: true
            },
            bars: {
                color_wrap: 3,
                stacked: true,
                formatters: [
                     function (value, min, max, header) {
                         return header.toUpperCase() + '\n$' + Number(value).toLocaleString('en', {maximumSignificantDigits: 2})
                     }
                ]
            },
            xaxis: {
                show: true
            },
            yaxes: [
                {
                    show: true,
                    position: 'left',
                    data_start: 0,
                    data_offset: 1,
                    data_offset_type: 'fill',
                    tick_formatter: function (ticks, min, max, interval) {
                        return {
                             ticks: [
                                [0, '0'],
                                [10000000, '10 m'],
                                [20000000, '20 m'],
                                [30000000, '30 m'],
                                [40000000, '40 m'],
                                [50000000, '50 m'],
                                [60000000, '60 m'],
                                [70000000, '70 m'],
                                [80000000, '80 m'],
                                [90000000, '90 m'],
                                [100000000, '10 m']
                             ],
                             min: min,
                             max: 100000000,
                             interval: 10000000
                        }
                    }
                }
            ]
        }
    },
    //
    //
    //
    {
        label: 'Multiple axes with custom formatted hover labels',
        description: 'Increased gap between groups',
        css: {
            width: '502px', height: '300px'
        },
        data: [
            [65946270, 235923330],
            [547571871, 424601441],
            [234254353, 325453333],
            [493250327, 451133576]
        ],
        options: {
            groups: {
                gap: 40,
                labels: {
                    h1: ['h1.1', 'h1.2'],
                    h2: ['h2.1', 'h2.2']
                },
                show: true
            },
            bars: {
                formatters: [
                    function (value) {return 'Volume\n' + value},
                    function (value) {return 'USD\n' + value}
                ],
                format_offset: 1
            },
            xaxis: {
                show: true,
                labels: {truncate: 40}
            },
            yaxes: [
                {
                    show: true,
                    position: 'left',
                    data_start: 0,
                    data_offset: 1,
                    data_offset_type: 'fill'
                }, {
                    show: true,
                    position: 'right',
                    data_start: 1,
                    data_offset: 1,
                    data_offset_type: 'fill'
                }
            ]
        }
    },
    //
    //
    //
    {
        label: 'Lots of data in small area (9 x 9)',
        description: 'Colour wrap 9',
        css: {
            width: '502px', height: '300px'
        },
        data: [
            [300111168, 115154669, 466061552, 526628836, 276326947, 745577439, 66899343, 670429230, 801027020],
            [422644150, 464003117, 971143096, 972221423, 910127423, 97343030, 248716480, 954706044, 618903642],
            [739241985, 450519986, 579136141, 704871671, 528101550, 388838999, 514250972, 128657604, 284877175],
            [486388619, 104245851, 158956222, 635904148, 127126713, 436416085, 775219566, 866269980, 702668793],
            [178705266, 879650446, 64860234, 624233842, 800651220, 718002852, 378386265, 572852628, 88163835],
            [302720646, 709759165, 674666931, 493299276, 383212750, 618540132, 888122914, 934738029, 816773243],
            [242563195, 789289028, 887818676, 405873226, 781958178, 97896024, 250639622, 86662200, 65256256],
            [876019008, 673149948, 936088805, 572149882, 417761941, 176563031, 486046059, 802992259, 339528753],
            [432200090, 879056355, 261418768, 154118683, 292565231, 310291391, 63384005, 419564737, 935906605]
        ],
        options: {
            label_color: '#333',
            groups: {
                gap: 10,
                labels: {
                    h1: ['h1.1', 'h1.2', 'h1.3', 'h1.4', 'h1.5', 'h1.6', 'h1.7', 'h1.8', 'h1.9']
                },
                show: true
            },
            bars: {
                color_wrap: 9,
                formatters: [
                    function (value) {return value + ' USD'}
                ]
            },
            xaxis: {
                show: false
            },
            yaxes: [
                {
                    show: true,
                    position: 'left',
                    data_start: 0,
                    data_offset: 1,
                    data_offset_type: 'fill'
                }
            ]
        }
    }
]);
