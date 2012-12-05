require 'sinatra'

set :public_folder, 'public'

get '/' do
  send_file 'index.html'
end

get '/another_page' do
  send_file 'another_page.html'
end