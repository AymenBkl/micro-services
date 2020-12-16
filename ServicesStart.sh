cd service-login
DEBUG=http node server &

cd ..
cd service-orders
DEBUG=http node server &

cd ..
cd service-signup
DEBUG=http node server &

cd ..
cd service-log
DEBUG=http node server &

cd ..
cd service-files
DEBUG=http node server &


cd ..
cd service-user
DEBUG=http node server &

cd ..
cd service-category
DEBUG=http node server &

cd ..
cd service-products
DEBUG=http node server &

cd ..
cd api-gateway
DEBUG=http node server

