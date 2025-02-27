#define CROW_STATIC_DIRECTORY "/Core/public/"
#define CROW_STATIC_ENDPOINT "/public/<path>"

#include <crow/crow.h>
#include <crow/middlewares/cors.h>
#include <json.h>
#include "constants.h"

int main(int argc, const char * argv[])
{
    crow::App<crow::CORSHandler> app;
    
    auto& cors = app.get_middleware<crow::CORSHandler>();
    cors.global();

    
    CROW_ROUTE(app, "/explore")
    ([](void) {
        crow::json::wvalue::list response = {};
        
        auto arr = mapNozomi();
        for (auto i : arr)
        {
            crow::json::wvalue x = {};
            for ( auto iter = i.begin(); iter != i.end(); ++iter)
            {
                x[iter->first] = iter->second;
            }
            response.push_back(x);
        }

        return crow::json::wvalue(response);
    });
    
    
    CROW_ROUTE(app, "/my")
    ([](void) {
        crow::json::wvalue::list response = {};
        
        auto arr = mapNozomi();
        for (auto i : arr)
        {
            crow::json::wvalue x = {};
            for ( auto iter = i.begin(); iter != i.end(); ++iter)
            {
                x[iter->first] = iter->second;
            }
            response.push_back(x);
        }

        return crow::json::wvalue(response);
    });

    app.port(3000).multithreaded().run();
    
    return 0;
}
