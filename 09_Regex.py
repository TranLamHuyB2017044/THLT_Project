def parse(grammar, symbol, string):
    if not string and symbol == '':
        return True

    if not string or not symbol:
        return False

    if symbol[0] == string[0]:
        return parse(grammar, symbol[1:], string[1:])

    if symbol[0] not in grammar: #khong co tap luat sinh cua thang symbol[0]
        return False

    for rule in grammar[symbol[0]]:
        if parse(grammar, rule + symbol[1:], string):
            return True

    return False


def is_derivable(grammar, start_symbol, input_string):

    # Xây dựng grammar từ văn phạm đầu vào
    grammar_dict = {}
    for rule in grammar.split('\n'):
        if '->' in rule:
            left, right = rule.split('->')
            left = left.strip()
            right = right.strip()
            if left not in grammar_dict:
                grammar_dict[left] = []
            grammar_dict[left].append(right)

    return parse(grammar_dict, start_symbol, input_string)


# Văn phạm đã cho
grammar = """
S -> 0A
A -> 10A
A -> e
"""

# Chuỗi kiểm tra
input_string = "01010e"

start_symbol = 'S'

if is_derivable(grammar, start_symbol, input_string):
    print(f"'{input_string}' có thể được sinh ra từ văn phạm.")
else:
    print(f"'{input_string}' không thể được sinh ra từ văn phạm.")
