let form=document.getElementById('form')
let username=document.getElementById('username');
let password=document.getElementById('password');

function validate()
{
    console.log({username:username.value}); 
    console.log({password:password.value});
    if(username.value==""|| password.value=="")
    {
     alert("Please enter password and Name ");
    }
}

async function callApi()
{
    alert("callApi");
    await submitLoginThroughPromise();
  
}
async function submitLoginThroughPromise()
{
  

    const response = await axios({
      method: 'post',
      url: 'https://euro-dev.learnindialearn.in/api/auth/auth/login',
      
      headers: {
          'Content-Type': 'application/json'
      },
      data: {
          email: username.value,
        password: password.value
      }
    }).then(function(response)
    {
      console.log('submitLoginThroughPromise response', response);
    }).catch(function(error) {
      console.log(error);
     });
  
}

async function submitLoginDetail()
{
try {
  const response = await axios({
    method: 'post',
    url: 'https://euro-staging.learnindialearn.in/api/auth/auth/login',
    
    headers: {
        'Content-Type': 'application/json'
    },
    data: {
        email: username.value,
      password: password.value
    }
  });
  console.log('response', response);
} catch (error) {
  console.log(error);
}

}