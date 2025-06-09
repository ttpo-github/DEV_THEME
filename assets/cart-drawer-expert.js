// EXPERT DROPDOWN
                  let random_expert = window.expert_data[Math.floor(Math.random()*window.expert_data.length)];
    
                  //console.log(window.expert_data)
                  //console.log('Main')
                  //console.log(random_expert)
                  //console.log({random_expert})
                  //console.log({random_expert:random_expert})
                  
                  let img = document.createElement('img');  
                  let expertContent = document.querySelector('.cart-drawer-call-expert-text');
                  let expertPhone = document.querySelector('.cart-drawer-call-expert-phone');
                  //let textRefactor = expertContent.innerText.replace('[name]', random_expert.name).replace('[phone]', random_expert.phone);
                  
                  document.querySelector('.help-images').innerHTML = ''
                  img.src = random_expert.image;    
                  document.querySelector('.help-images').appendChild(img);
                  expertPhone.href = `tel:${random_expert.phone.replace(/[()\-\s]/g, '').trim()}`
                  expertContent.innerHTML = ` TTEST Click to call ${random_expert.name} <br> ${random_expert.phone}`
  
                  // EXPERT DROPDOWN