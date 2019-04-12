# BAMAZON

An Amazon-like storefront using MySQL to store products from the One Piece universe. The app will take in orders from customers and deplete stock from the store's inventory. The inventory will then be updated to the MySQL database. 

### Prerequisites

Install node modules
```
npm install
```
### Getting Started

Open your terminal and navigate towards the bamazon folder. Initiate the bamazonCustomer.js file

The following storefront will show up in your terminal. 

![](image/1.PNG)

To make a purchase, follow the instruction prompt. 

In the example below, the customer purchased 3 den den moshi. As can be seen, there are sufficient items in stock, and thus the transaction went through. The total amount for the price of 3 den den moshi were also displayed for the customer's convenience. 

![](image/4.PNG)

Once the transaction has gone through, the MySQL Database will also update the inventory accordingly. Please see the following video for an example.

https://drive.google.com/file/d/1aM_mzz0X0nkW-_3_65XEipKSvkoXp8mw/view


However, if the customer tried to make a purchase that exceeds the store's inventory, the following message will be displayed.

![](image/7.PNG)

Should the customer not confirm their order, the following message will be displayed. 

![](image/8.PNG)


## Authors

* **Tiffany Lin** 

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
