cd service-login
pm2 start server.js --name "service-login" &

cd ..
cd service-orders
pm2 start server.js --name "service-order" &

cd ..
cd service-signup
pm2 start server.js --name "service-signup" &

cd ..
cd service-log
pm2 start server.js --name "service-log" &

cd ..
cd service-files
pm2 start server.js --name "service-files" &


cd ..
cd service-user
pm2 start server.js --name "service-user" &

cd ..
cd service-category
pm2 start server.js --name "service-category" &

cd ..
cd service-products
pm2 start server.js --name "service-products" &

cd ..
cd service-messages
pm2 start server.js --name "service-messages" &

cd ..
cd service-prescriptions
pm2 start server.js --name "service-prescriptions" &


cd ..
cd api-gateway
pm2 start server.js --name "api-getway" 

