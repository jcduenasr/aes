# Clone the image

git clone https://github.com/jcduenasr/aes.git /your/path/for/saving

# Building the image
After cloning the image, go to the directory where you saved the image and run the following command:
```
docker build -t api_calculator .
```
you can see the image with the following command:
```
docker image list
```
![alt text](https://github.com/jcduenasr/aes/blob/master/images/docker_image_list.png)
Running the image
Run the following command:
```
docker run -p 8080:8080 -d api_calculator
```
Port 8080 is the one recommended, though you can use any port available in your own machine.

You can theck that the image is running on a container with the following command:
```
docker ps
```
which should produce an output like this
![alt text](https://github.com/jcduenasr/aes/blob/master/images/docker_ps.png)
Testing
The API exposes 4 methods, each method is a basic arithmetic operation, the sum and mul operations receive n parameters and the rest and div operations receive 2 parameters.

### Note: if you are working with docker tools the ip is 192.168.99.100 instead of 127.0.0.1
```
Addition: 127.0.0.1:8080/sum/num1/num2/andSoOn
Subtraction: 127.0.0.1:8080/res/num1/num2
Multiplication: 127.0.0.1:8080/mul/num1/num2/andSoOn
Division: 127.0.0.1:8080/div/num1/num2
```
You can check the API using a client, like Postman
![alt text](https://github.com/jcduenasr/aes/blob/master/images/mul_postman.png)
