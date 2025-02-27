//
//  constants.cpp
//  Core
//
//  Created by Martin Pospisil on 24.02.2025.
//
#include <string>
#include <vector>
#include <unordered_map>

std::unordered_map<std::string, std::string> x1 =
{
    {"id", "1"},
    {"title", "Ashley on the Map"},
    {"author", "Ashley Benson"},
    {"date", "2 days ago"},
    {"image", "ashley.jpg"},
};

std::unordered_map<std::string, std::string> x2 =
{
    {"id", "2"},
    {"title", "Our last trip to Disneyland"},
    {"author", "Jensen family"},
    {"date", "1 week ago"},
    {"image", "disneyland.png"},
};

std::unordered_map<std::string, std::string> x3 =
{
    {"id", "3"},
    {"title", "Air of Santorini"},
    {"author", "Melania Mylioti"},
    {"date", "2 weeks ago"},
    {"image", "santorini.jpg"},
};

std::unordered_map<std::string, std::string> x4 =
{
    {"id", "4"},
    {"title", "Night wonders of Yellowstone"},
    {"author", "Paul Gerard"},
    {"date", "1 month ago"},
    {"image", "yellowstone.jpg"},
};

std::vector<std::unordered_map<std::string, std::string>> mapNozomi(void)
{
    std::vector<std::unordered_map<std::string, std::string>> vec = { x1, x2, x3, x4 };
    return vec;
};
