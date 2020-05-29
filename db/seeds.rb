1.upto(10) do |i|
  item = Item.create(name: "item_#{i}", price: i*100)
  1.upto(5) do |j|
    item.photos << Photo.create(title: "#{i}_#{j}")
  end
end