
var myChart1;
var myChart2;
var myChart3;
var myChart4;


let btn = document.getElementById('buscar');

btn.addEventListener('click', (event) => {
    event.preventDefault();
    let palabra = document.getElementById('palabra').value;
    let url_api = "https://api.tvmaze.com/search/shows?q=" + palabra

    fetch(url_api)
        .then(response => response.json())
        .then(data => {
            let contenedorTitulo = document.getElementsByClassName('title')[0]
            contenedorTitulo.innerHTML = `<h5 class="mb-0 mx-5">Movies with words similiar to "${palabra}"</h5>`

            let comedy = document.getElementById('comedy')
            let drama = document.getElementById('drama')
            let family = document.getElementById('family')
            let action = document.getElementById('action')

            let contComedy = 0
            let contDrama = 0
            let contFamily = 0
            let contAction = 0

            //Para el top 3
            let names = []
            let types = []
            let languages = []
            let status = []
            let weights = []
            let scores = []
            let urls = []

            //Variables - diagrama de barras
            let endedEnglish = 0;
            let endedKorean = 0;
            let inDevelopmentEnglish = 0;
            let inDevelopmentKorean = 0;
            let runningEnglish = 0;
            let runningKorean = 0;

            //Variables - para el doughnut (Types)
            let scripted = 0;
            let variety = 0;
            let animation = 0;

            //Variables para el pie chart (premiadas)
            let premiered = 0;
            let notPremiered = 0;

            for (let movie of data) {


                let show = movie.show
                /* para las imágenes, no se está usando
                let url = ""
                if (show.hasOwnProperty('image')) {
                    let imagen = movie.show.image
                    if (imagen != null) {
                        url = movie.show.image.medium
                    }
                }*/

                //Agregar a arrays para el top 3
                let nombre = show.name
                names.push(nombre)
                let score = movie.score
                scores.push(score)
                let type = show.type
                types.push(type)
                let language = show.language
                languages.push(language)
                let statusMovie = show.status
                status.push(statusMovie)
                let weight = show.weight
                weights.push(weight)
                let url = show.url
                urls.push(url)


                //Conteo de los tipos de géneros
                let genres = show.genres
                let tags = ""
                for (let genre of genres) {
                    if (genre == "Comedy") {
                        contComedy++
                    } else if (genre == "Drama") {
                        contDrama++
                    } else if (genre == "Family") {
                        contFamily++
                    } else if (genre == "Action") {
                        contAction++
                    }

                }

                //Conteo para diagrama de barras
                if (language == "English" && statusMovie == "Ended") {
                    endedEnglish++
                } else if (language == "Korean" && statusMovie == "Ended") {
                    endedKorean++
                } else if (language == "English" && statusMovie == "In Development") {
                    inDevelopmentEnglish++
                } else if (language == "Korean" && statusMovie == "In Development") {
                    inDevelopmentKorean++
                } else if (language == "English" && statusMovie == "Running") {
                    runningEnglish++
                } else if (language == "Korean" && statusMovie == "Running") {
                    runningKorean++
                }

                //conteo para el doughnut
                if (type == "Scripted") {
                    scripted++
                } else if (type == "Variety") {
                    variety++
                } else if (type == "Animation") {
                    animation++
                }

                //Conteo para el pie chart (premiadas)
                if (show.hasOwnProperty('premiered')) {
                    let show_premiered = show.premiered
                    console.log(show_premiered)
                    if (show_premiered != null) {
                        premiered++
                    }
                    else {
                        notPremiered++
                    }
                }

            }
            comedy.textContent = contComedy
            drama.textContent = contDrama
            family.textContent = contFamily
            action.textContent = contAction
            
            //TOP 3
            document.getElementById('name1').innerHTML= `<a href="${urls[0]}" target="_blank">${names[0]} <a>`
            document.getElementById('type1').textContent = types[0]
            document.getElementById('language1').textContent = languages[0]
            document.getElementById('status1').textContent = status[0]
            document.getElementById('weight1').textContent = weights[0]
            document.getElementById('score1').textContent = scores[0].toFixed(2)

            document.getElementById('name2').innerHTML= `<a href="${urls[1]}" target="_blank">${names[1]} <a>`
            document.getElementById('type2').textContent = types[1]
            document.getElementById('language2').textContent = languages[1]
            document.getElementById('status2').textContent = status[1]
            document.getElementById('weight2').textContent = weights[1]
            document.getElementById('score2').textContent = scores[1].toFixed(2)

            document.getElementById('name3').innerHTML = `<a href="${urls[2]}" target="_blank">${names[2]} <a>`
            document.getElementById('type3').textContent = types[2]
            document.getElementById('language3').textContent = languages[2]
            document.getElementById('status3').textContent = status[2]
            document.getElementById('weight3').textContent = weights[2]
            document.getElementById('score3').textContent = scores[2].toFixed(2)

            //Diagrama de barras

            if (myChart1 != null) {
                myChart1.destroy();
            }

            let ctx1 = document.getElementById('status-chart').getContext('2d');
            myChart1 = new Chart(ctx1, {
                type: "bar",
                data: {
                    labels: ["Ended", "In Development", "Running"],
                    datasets: [{
                        label: "English",
                        data: [endedEnglish, inDevelopmentEnglish, runningEnglish],
                        backgroundColor: "rgba(69, 16, 176, .7)"
                    },
                    {
                        label: "Korean",
                        data: [endedKorean, inDevelopmentKorean, runningKorean],
                        backgroundColor: "rgba(161, 16, 176, .5)"
                    },
                    ]
                },
                options: {
                    responsive: true
                }
            });

            //Pie chart
            if (myChart3 != null) {
                myChart3.destroy();
            }
            let ctx3 = document.getElementById('pie-chart').getContext('2d');
            myChart3 = new Chart(ctx3, {
                type: "pie",
                data: {
                    labels: ["Premiered", "Not premiered"],
                    datasets: [{
                        backgroundColor: [
                            "rgba(161, 16, 176, .5)",
                            "rgba(69, 16, 176, .7)",
                        ],
                        data: [premiered, notPremiered]
                    }]
                },
                options: {
                    responsive: true
                }
            });

            if (myChart4 != null) {
                myChart4.destroy();
            }

            // Types Doughnut
            var ctx4 = document.getElementById("types-chart").getContext("2d");
            myChart4 = new Chart(ctx4, {
                type: "doughnut",
                data: {
                    labels: ["Scripted", "Variety", "Animation"],
                    datasets: [{
                        backgroundColor: [
                            "rgba(69, 16, 176, .7)",
                            "rgba(161, 16, 176, .5)",
                            "rgba(134, 23, 151, .3)",
                        ],
                        data: [scripted, variety, animation]
                    }]
                },
                options: {
                    responsive: true
                }
            });

        })


        .catch(console.error);
});





(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Back to top button

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });



    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });


    // Progress Bar
    $('.pg-bar').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, { offset: '80%' });


    // Calender
    $('#calender').datetimepicker({
        inline: true,
        format: 'L'
    });



    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav: false
    });


    // Status Chart
    var ctx1 = $("#status-chart").get(0).getContext("2d");
    myChart1 = new Chart(ctx1, {
        type: "bar",
        data: {
            labels: ["Ended", "In Development", "Running"],
            datasets: [{
                label: "English",
                data: [0, 0, 0],
                backgroundColor: "rgba(69, 16, 176, .7)"
            },
            {
                label: "Korean",
                data: [0, 0, 0],
                backgroundColor: "rgba(161, 16, 176, .5)"
            },
            ]
        },
        options: {
            responsive: true
        }
    });

    // Pie Chart

    var ctx3 = $("#pie-chart").get(0).getContext("2d");
    myChart3 = new Chart(ctx3, {
        type: "pie",
        data: {
            labels: ["Premiered", "Not premiered"],
            datasets: [{
                backgroundColor: [
                    "rgba(161, 16, 176, .5)",
                    "rgba(69, 16, 176, .7)",
                ],
                data: [0,0]
            }]
        },
        options: {
            responsive: true
        }
    });

    // Types Doughnut
    var ctx4 = $("#types-chart").get(0).getContext("2d");
    myChart4 = new Chart(ctx4, {
        type: "doughnut",
        data: {
            labels: ["Scripted", "Variety", "Animation"],
            datasets: [{
                backgroundColor: [
                    "rgba(69, 16, 176, .7)",
                    "rgba(161, 16, 176, .5)",
                    "rgba(134, 23, 151, .3)",
                ],
                data: [0, 0, 0]
            }]
        },
        options: {
            aspectRatio: 1,
            responsive: true
        }


    });


})(jQuery);

