puts 10/3
puts 5 + 5/2.0
puts "coding".length


def format_name(str)
    parts = str.split(" ")
    new_parts = []
    
    parts.each do |part|
      new_parts << part[0].upcase + part[1..-1].downcase
      puts part
    end
    return new_parts.join(" ")
  end
  
  puts format_name("chase WILSON") # => "Chase Wilson"
  puts format_name("brian CrAwFoRd scoTT")


  # A name is valid is if satisfies all of the following:
# - contains at least a first name and last name, separated by spaces
# - each part of the name should be capitalized
#
# Hint: use str.upcase or str.downcase
# "a".upcase # => "A"

def is_valid_name(str)
    parts = str.split(" ")
    if parts.length <2
        return false
    end    

    parts.each do |word|
        if word[0] == word[0].upcase && word[1..-1] == word[1..-1].downcase
            return true
          else
            return false
        end
    end    
end

puts is_valid_name("Kush Patel")       # => true
puts is_valid_name("Daniel")           # => false
puts is_valid_name("Robert Downey Jr") # => true
puts is_valid_name("ROBERT DOWNEY JR") # => false


def is_valid_email(str)
    parts = str.split("@")
  
    if parts.length != 2
      return false
    end
  
    first = parts[0]
    second = parts[1]
    alpha = "abcdefghijklmnopqrstuvwxyz"
  
    first.each_char do |char|
      if !alpha.include?(char)
        return false
      end
    end
  
    if second.split('.').length == 2
      return true
    else
      return false
    end
  end
  
  puts is_valid_email("abc@xy.z")         # => true
  puts is_valid_email("jdoe@gmail.com")   # => true
  puts is_valid_email("jdoe@g@mail.com")  # => false
  puts is_valid_email("jdoe42@gmail.com") # => false
  puts is_valid_email("jdoegmail.com")    # => false
  puts is_valid_email("az@email")         # => false