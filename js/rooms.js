function showDetail(index) {
  let overview = document.querySelector('.overview-'+index);
  let detail = document.querySelector('.detail-'+index);
  let backbutton = document.querySelector('.back-'+index)
  console.log(backbutton)
  backbutton.classList.add('show-button')
  overview.classList.add('hide');
  detail.classList.add('show-detail');
}


function backToDefault(index){
  let overview = document.querySelector('.overview-'+index);
  let detail = document.querySelector('.detail-'+index);
  let backbutton = document.querySelector('.back-'+index)
  backbutton.classList.remove('show-button')
  overview.classList.remove('hide');
  detail.classList.remove('show-detail');
}




