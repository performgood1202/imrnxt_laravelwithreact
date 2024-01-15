<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FomoApp</title>
</head>

<body style="max-width: 600px;margin:  0 auto;box-sizing: border-box;font-family: itc-avant-garde-gothic-pro, sans-serif;">
	<div style="width: 100%;float:  left;background-color: #020551;padding: 0 ;">
		<div style="background-color:#020551;text-align: center;width: 100%;float:left;padding: 20px 0 0;color: #707070;">
			<img src="{{url('/images/white-logo.png')}}" style="width: 150px;" />
			<h2 style="font-size: 31px;font-weight: 800;margin: 30px 0 10px;color:#fff;">Hi Admin,</h2>
			<h4 style="font-size: 21px;font-weight: 600;margin-top: 20px;color:#fff;">New Contact Form Entry.</h4>
			<div>
			<p style="color: #fff;">First Name  : {{ $data1["firstName"] }}<br>
			Last Name  : {{ $data1["lastName"] }}<br>
			Email : {{ $data1["email"] }}<br>
			Message : {{ $data1["message"] }}</p>
			</div>
			
		</div>
		<footer style="background-color: #b38533;width: 100%;float: left;text-align: center;padding: 10px 0">
			<div style="width:100%;float: left; text-align: center; color: #fff;font-size: 15px;">
			<p>&copy; 2022 The IMRNext All rights reserved.</p>
			</div>
		</footer>
	</div>
</body>

</html>



