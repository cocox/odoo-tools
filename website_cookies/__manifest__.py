# -*- coding: utf-8 -*-
{
    'name': "website_cookies",

    'summary': """
        Show cookies disclaimer for EU
        """,

    'description': """
        Show cookies disclaimer for EU
    """,

    'author': "Jose Ramon Roca",
    'website': "http://www.jrroca.com",
    'category': 'Website',
    'version': '10.0.1.0',

    # any module necessary for this one to work correctly
    'depends': ['website'],

    # always loaded
    'data': [
        'views/website_cookies.xml',
    #    'views/res_config_cookies.xml',
    ],
    'installable': True,
    'active': False,
}