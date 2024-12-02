const ctx = document.getElementById('barChart')

new Chart(
    ctx,{
        type:'bar',
        data: {
            labels:['Red','Blue','Yellow','Black','Green'],//X axis labels
            datasets:[
                {
                    label: "Votes",
                    data:[12,19,3,20,7],
                    borderWidth: 2,
                    backgroundColor: ['rgba(255, 13, 62, 0.5)',
                                      'rgba(13, 168, 255, 0.5)',
                                      'rgba(210, 251, 12, 0.5)',
                                      'rgba(0, 0, 0, 0.5)',
                                      'rgba(16, 197, 40, 0.5)'],
                    borderColor: ['rgba(255, 13, 62, 1)','rgba(13, 168, 255, 1)','rgba(210, 251, 12, 1)','rgba(0,0,0,1)','rgba(16, 197, 40, 1)'] ,
                    barThickness: 60,
                }
            ]
        }
    }
)