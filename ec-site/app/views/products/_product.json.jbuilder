json.extract! product, :id, :name, :price, :weight, :stock, :detail, :created_at, :updated_at
json.url product_url(product, format: :json)
