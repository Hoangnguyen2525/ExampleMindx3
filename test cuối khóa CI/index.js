//bài 1//
function adjacentElementsProduct(arr) {
    return arr.slice(0, -1)
              .reduce((max, n, i) => Math.max(max, n * arr[i + 1]), -Infinity)
  }
  
  
  console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));

  // bài 2 //
  function alternatingSums(inputArray) {
    alternatingSums([60, 40, 55, 75, 64])
            var sumsArr;  var sumTeam1 = 0;
            var sumTeam2 = 0;
            for (var i = 0; i < inputArray.length; i++) {
                if (i%2 == 0) {
                  sumTeam1 = sumTeam1 + inputArray[i]
                } else {
                  sumTeam2 = sumTeam2 + inputArray[i]
                }
            }
            sumsArr.push(sumTeam1);
            sumsArr.push(sumTeam2);
            return sumsArr
          }
            var mindX2 =  alternatingSums([60, 40, 55, 75, 64])
            console.log(mindx2)
  //bài 3//
  var container = document.getElementById('container');
  var form = document.getElementById('input').value;
  var result = document.getElementById('result');
  var render  =document.querySelector("#form").addEventListener('submit',this.handleSubmit )
  function handleSubmit(e) {
    e.preventDefault();
    let value =input.value;
    fetch(`https://api.shrtco.de/v2/shorten?url=${value}`)
      .then((res) => res.json())
      .then((data) => {
        input.value = '';
        if (!value) {
          result.innerText = 'hãy nhập link ';
        } else {
          result.innerText = `kết quả là: ${data.result.short_link}`;
        }
      });
  }
