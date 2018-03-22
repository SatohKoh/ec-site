json.extract! product, :id, :name, :price, :weight, :stock, :detail, :image, :created_at, :updated_at
json.url product_url(product, format: :json)
