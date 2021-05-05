const allContent = [{
"pager": 1,
"path": "blog",
"type": "blog",
"filename": "blog.json",
"fields": {
    "title": "Latest News"
}
},{
"pager": 1,
"path": "/",
"type": "index",
"filename": "index.json",
"fields": {
	"components": [
		{
			"name": "hero",
			"fields": {
				"title": "Let us solve your critical website development challenges",
				"body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil enim maxime corporis cumque totam aliquid nam sint inventore optio modi neque laborum officiis necessitatibus",
				"link": {
					"title": "Contact with Us",
					"url": "/contact"
				},
				"image": "/banner-art.svg"
			}
		},
		{
			"name": "grid",
			"fields": {
				"title": "Something You Need To Know",
				"items": [
					{
						"title": "Clean Code",
						"body": "Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil",
						"icon": "ti-pulse"
					},
					{
						"title": "Object Oriented",
						"body": "Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil",
						"icon": "ti-package"
					},
					{
						"title": "24h Service",
						"body": "Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil",
						"icon": "ti-alarm-clock"
					},
					{
						"title": "Value for Money",
						"body": "Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil",
						"icon": "ti-credit-card"
					},
					{
						"title": "Faster Response",
						"body": "Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil",
						"icon": "ti-headphone-alt"
					},
					{
						"title": "Cloud Support",
						"body": "Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil",
						"icon": "ti-cloud-up"
					}
				]
			}
		},
		{
			"name": "image_text_block",
			"fields": {
				"title": "It is the most advanced digital marketing and it company.",
				"body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.",
				"background": "",
				"link": {
					"title": "Check it out",
					"url": "/",
					"alt": "all"
				},
				"image": {
					"position": "right",
					"url": "/service-3.png",
					"alt": "Net income chart"
				}
			}
		},
		{
			"name": "image_text_block",
			"fields": {
				"title": "It is a privately owned Information and cyber security company",
				"body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.",
				"background": "blue",
				"link": {
					"title": "Check it out",
					"url": "/"
				},
				"image": {
					"position": "left",
					"url": "/service-1.png",
					"alt": "Revenue chart"
				}
			}
		},
		{
			"name": "image_text_block",
			"fields": {
				"title": "It’s a team of experienced and skilled people with distributions",
				"body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.",
				"background": "",
				"link": {
					"title": "Check it out",
					"url": "/"
				},
				"image": {
					"position": "right",
					"url": "/service-2.png",
					"alt": "Generic bar chart"
				}
			}
		},
		{
			"name": "image_text_block",
			"fields": {
				"title": "A company standing different from others",
				"body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.",
				"background": "blue",
				"link": {
					"title": "Check it out",
					"url": "/"
				},
				"image": {
					"position": "left",
					"url": "/service-3.png"
				}
			}
		},
		{
			"name": "banner",
			"fields": {
				"title": "Experience the best workflow with us",
				"image": {
					"url": "/screenshot.svg",
					"alt": "People doing different marketing activities"
				}
			}
		},
		{
			"name": "cta",
			"fields": {
				"title": "Ready to get started?",
				"body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur.",
				"image": {
					"alt": "Two people building a webpage",
					"url": "/cta.svg"
				},
				"link": {
					"url": "/contact",
					"title": "Contact Us"
				}
			}
		}
	]
}
},{
"pager": 1,
"path": "contact",
"type": "pages",
"filename": "contact.json",
"fields": {
	"components": [
        {
            "name": "page_title",
            "fields": {
                "title": "Contact Us"
            }
        },
		{
			"name": "contact_form",
			"fields": {
				"title": "Why you should contact us!",
				"desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit recusandae voluptates doloremque veniam temporibus porro culpa ipsa, nisi soluta minima saepe laboriosam debitis nesciunt.",
				"phone": "+88 125 256 452",
				"email": "test@example.com",
				"address": "360 Main rd, Rio, Brazil"
			}
		}
	]
}
},{
"pager": 1,
"path": "faq",
"type": "pages",
"filename": "faq.json",
"fields": {
	"components": [
        {
            "name": "page_title",
            "fields": {
                "title": "Frequently Asked Questions"
            }
        },
		{
			"name": "faq",
			"fields": {
				"items": [
					{
						"question": "Will updates also be free?",
						"answer": "Lorem, link ipsum dolor sit amet consectetur adipisicing elit. Cumque praesentium nisi officiis maiores quia sapiente totam omnis vel sequi corporis ipsa incidunt reprehenderit recusandae maxime perspiciatis iste placeat architecto, mollitia delectus ut ab quibusdam. Magnam cumque numquam tempore reprehenderit illo, unde cum omnis vel sed temporibus, repudiandae impedit nam ad enim porro, qui labore fugiat quod suscipit fuga necessitatibus. Perferendis, ipsum? Cum, reprehenderit. Sapiente atque quam vitae, magnam dolore consequatur temporibus harum odit ab id quo qui aspernatur aliquid officiis sit error asperiores eveniet quibusdam, accusantium enim recusandae quas ea est! Quaerat omnis, placeat vitae laboriosam doloremque recusandae mollitia minima!"
					},
					{
						"question": "Discounts for students and Non Profit Organizations?",
						"answer": "Lorem, link ipsum dolor sit amet consectetur adipisicing elit. Cumque praesentium nisi officiis maiores quia sapiente totam omnis vel sequi corporis ipsa incidunt reprehenderit recusandae maxime perspiciatis iste placeat architecto, mollitia delectus ut ab quibusdam. Magnam cumque numquam tempore reprehenderit illo, unde cum omnis vel sed temporibus, repudiandae impedit nam ad enim porro, qui labore fugiat quod suscipit fuga necessitatibus. Perferendis, ipsum? Cum, reprehenderit. Sapiente atque quam vitae, magnam dolore consequatur temporibus harum odit ab id quo qui aspernatur aliquid officiis sit error asperiores eveniet quibusdam, accusantium enim recusandae quas ea est! Quaerat omnis, placeat vitae laboriosam doloremque recusandae mollitia minima!"
					},
					{
						"question": "I need something unique, Can you make it?",
						"answer": "Lorem, link ipsum dolor sit amet consectetur adipisicing elit. Cumque praesentium nisi officiis maiores quia sapiente totam omnis vel sequi corporis ipsa incidunt reprehenderit recusandae maxime perspiciatis iste placeat architecto, mollitia delectus ut ab quibusdam. Magnam cumque numquam tempore reprehenderit illo, unde cum omnis vel sed temporibus, repudiandae impedit nam ad enim porro, qui labore fugiat quod suscipit fuga necessitatibus. Perferendis, ipsum? Cum, reprehenderit. Sapiente atque quam vitae, magnam dolore consequatur temporibus harum odit ab id quo qui aspernatur aliquid officiis sit error asperiores eveniet quibusdam, accusantium enim recusandae quas ea est! Quaerat omnis, placeat vitae laboriosam doloremque recusandae mollitia minima!"
					},
					{
						"question": "Is there any documentation and support?",
						"answer": "Lorem, link ipsum dolor sit amet consectetur adipisicing elit. Cumque praesentium nisi officiis maiores quia sapiente totam omnis vel sequi corporis ipsa incidunt reprehenderit recusandae maxime perspiciatis iste placeat architecto, mollitia delectus ut ab quibusdam. Magnam cumque numquam tempore reprehenderit illo, unde cum omnis vel sed temporibus, repudiandae impedit nam ad enim porro, qui labore fugiat quod suscipit fuga necessitatibus. Perferendis, ipsum? Cum, reprehenderit. Sapiente atque quam vitae, magnam dolore consequatur temporibus harum odit ab id quo qui aspernatur aliquid officiis sit error asperiores eveniet quibusdam, accusantium enim recusandae quas ea est! Quaerat omnis, placeat vitae laboriosam doloremque recusandae mollitia minima!"
					},
					{
						"question": "Any refunds?",
						"answer": "Lorem, link ipsum dolor sit amet consectetur adipisicing elit. Cumque praesentium nisi officiis maiores quia sapiente totam omnis vel sequi corporis ipsa incidunt reprehenderit recusandae maxime perspiciatis iste placeat architecto, mollitia delectus ut ab quibusdam. Magnam cumque numquam tempore reprehenderit illo, unde cum omnis vel sed temporibus, repudiandae impedit nam ad enim porro, qui labore fugiat quod suscipit fuga necessitatibus. Perferendis, ipsum? Cum, reprehenderit. Sapiente atque quam vitae, magnam dolore consequatur temporibus harum odit ab id quo qui aspernatur aliquid officiis sit error asperiores eveniet quibusdam, accusantium enim recusandae quas ea est! Quaerat omnis, placeat vitae laboriosam doloremque recusandae mollitia minima!"
					},
					{
						"question": "What is a product key?",
						"answer": "Lorem, link ipsum dolor sit amet consectetur adipisicing elit. Cumque praesentium nisi officiis maiores quia sapiente totam omnis vel sequi corporis ipsa incidunt reprehenderit recusandae maxime perspiciatis iste placeat architecto, mollitia delectus ut ab quibusdam. Magnam cumque numquam tempore reprehenderit illo, unde cum omnis vel sed temporibus, repudiandae impedit nam ad enim porro, qui labore fugiat quod suscipit fuga necessitatibus. Perferendis, ipsum? Cum, reprehenderit. Sapiente atque quam vitae, magnam dolore consequatur temporibus harum odit ab id quo qui aspernatur aliquid officiis sit error asperiores eveniet quibusdam, accusantium enim recusandae quas ea est! Quaerat omnis, placeat vitae laboriosam doloremque recusandae mollitia minima!"
					},
					{
						"question": "Where do I download the file to?",
						"answer": "Lorem, link ipsum dolor sit amet consectetur adipisicing elit. Cumque praesentium nisi officiis maiores quia sapiente totam omnis vel sequi corporis ipsa incidunt reprehenderit recusandae maxime perspiciatis iste placeat architecto, mollitia delectus ut ab quibusdam. Magnam cumque numquam tempore reprehenderit illo, unde cum omnis vel sed temporibus, repudiandae impedit nam ad enim porro, qui labore fugiat quod suscipit fuga necessitatibus. Perferendis, ipsum? Cum, reprehenderit. Sapiente atque quam vitae, magnam dolore consequatur temporibus harum odit ab id quo qui aspernatur aliquid officiis sit error asperiores eveniet quibusdam, accusantium enim recusandae quas ea est! Quaerat omnis, placeat vitae laboriosam doloremque recusandae mollitia minima!"
					},
					{
						"question": "Any refunds?",
						"answer": "Lorem, link ipsum dolor sit amet consectetur adipisicing elit. Cumque praesentium nisi officiis maiores quia sapiente totam omnis vel sequi corporis ipsa incidunt reprehenderit recusandae maxime perspiciatis iste placeat architecto, mollitia delectus ut ab quibusdam. Magnam cumque numquam tempore reprehenderit illo, unde cum omnis vel sed temporibus, repudiandae impedit nam ad enim porro, qui labore fugiat quod suscipit fuga necessitatibus. Perferendis, ipsum? Cum, reprehenderit. Sapiente atque quam vitae, magnam dolore consequatur temporibus harum odit ab id quo qui aspernatur aliquid officiis sit error asperiores eveniet quibusdam, accusantium enim recusandae quas ea est! Quaerat omnis, placeat vitae laboriosam doloremque recusandae mollitia minima!"
					}
				]

			}
		}
	]
}
},{
"pager": 1,
"path": "pricing",
"type": "pages",
"filename": "pricing.json",
"fields": {
	"components": [
        {
            "name": "page_title",
            "fields": {
                "title": "Pricing"
            }
        },
		{
			"name": "pricing",
			"fields": {
				"items": [
					{
						"title": "Basic Plan",
						"price": "$19",
						"interval": "month",
						"body": "Best For Small Individuals",
						"features": [
							"Express Service",
							"Customs Clearance",
							"Time-Critical Services"
						],
						"link": {
							"title": "Get Started For Free",
							"url": "/"
						},
						"wrapper_classes": "mb-5 mb-lg-0 px-3 pr-3 px-lg-0",
						"class_classes": ""
					},
					{
						"title": "Professional Plan",
						"price": "$49",
						"interval": "month",
						"body": "Best For Professionals",
						"features": [
							"Express Service",
							"Customs Clearance",
							"Time-Critical Services",
							"Cloud Service",
							"Best Dashboard"
						],
						"link": {
							"title": "Get Started For Free",
							"url": "/"
						},
						"wrapper_classes": "col-recommended",
						"card_classes": "-lg border-0"
					},
					{
						"title": "Business Plan",
						"price": "$99",
						"interval": "month",
						"body": "Best For Large Enterprises",
						"features": [
							"Express Service",
							"Customs Clearance",
							"Time-Critical Services"
						],
						"link": {
							"title": "Get Started For Free",
							"url": "/"
						},
						"wrapper_classes": "mb-5 mb-lg-0 px-3 pr-3 px-lg-0",
						"card_classes": ""
					}
				]

			}
		},
		{
			"name": "cta",
			"fields": {
				"title": "Ready to get started?",
				"body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur.",
				"image": {
					"alt": "Two people building a webpage",
					"url": "/cta.svg"
				},
				"link": {
					"url": "/contact",
					"title": "Contact Us"
				}
			}
		}
	]
}
},{
"pager": 1,
"path": "privacy-policy",
"type": "pages",
"filename": "privacy-policy.json",
"fields": {
	"components": [
        {
            "name": "page_title",
            "fields": {
                "title": "Privacy & Policy"
            }
        },
		{
			"name": "blurbs",
			"fields": {
				"items": [
					{
						"title": "Responsibility of Contributors",
						"paragraphs": [
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, donec nunc eros, ullamcorper id feugiat quisque aliquam sagittis. Sem turpis sed viverra massa gravida pharetra. Non dui dolor potenti eu dignissim fusce. Ultrices amet, in curabitur a arcu a lectus morbi id. Iaculis erat sagittis in tortor cursus. Molestie urna eu tortor, erat scelerisque eget. Nunc hendrerit sed interdum lacus. Lorem quis viverra sed",
							"pretium, aliquam sit. Praesent elementum magna amet, tincidunt eros, nibh in leo. Malesuada purus, lacus, at aliquam suspendisse tempus. Quis tempus amet, velit nascetur sollicitudin. At sollicitudin eget amet in. Eu velit nascetur sollicitudin erhdfvssfvrgss eget viverra nec elementum. Lacus, facilisis tristique lectus in."
						]
					},
					{
						"title": "Gathering of Personal Information",
						"paragraphs": [
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, donec nunc eros, ullamcorper id feugiat quisque aliquam sagittis. Sem turpis sed viverra massa gravida pharetra. Non dui dolor potenti eu dignissim fusce. Ultrices amet, in curabitur a arcu a lectus morbi id. Iaculis erat sagittis in tortor cursus. Molestie urna eu tortor, erat scelerisque eget. Nunc hendrerit sed interdum lacus. Lorem quis viverra sed"
						]
					},
					{
						"title": "Protection of Personal Information",
						"paragraphs": [
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, donec nunc eros, ullamcorper id feugiat quisque aliquam sagittis. Sem turpis sed viverra massa gravida pharetra. Non dui dolor potenti eu dignissim fusce. Ultrices amet, in curabitur a arcu a lectus morbi id. Iaculis erat sagittis in tortor cursus.",
							"Molestie urna eu tortor, erat scelerisque eget. Nunc hendrerit sed interdum lacus. Lorem quis viverra sed Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, donec nunc eros, ullamcorper id feugiat"
						]
					},
					{
						"title": "Privacy Policy Changes",
						"paragraphs": [
							"<li>Sll the Themefisher items are designed to be with the latest , We check all</li><li>comments that threaten or harm the reputation of any person or organization</li><li>personal information including, but limited to, email addresses, telephone numbers</li><li>Any Update come in The technology Customer will get automatic Notification.</li></ol>"
						]
					}
				]
			}
		}
	]
}
},{
"pager": 1,
"path": "terms-conditions",
"type": "pages",
"filename": "terms-conditions.json",
"fields": {
	"components": [
        {
            "name": "page_title",
            "fields": {
                "title": "Terms of Service"
            }
        },
		{
			"name": "blurbs",
			"fields": {
				"items": [
					{
						"title": "Responsibility of Contributors",
						"paragraphs": [
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, donec nunc eros, ullamcorper id feugiat quisque aliquam sagittis. Sem turpis sed viverra massa gravida pharetra. Non dui dolor potenti eu dignissim fusce. Ultrices amet, in curabitur a arcu a lectus morbi id. Iaculis erat sagittis in tortor cursus. Molestie urna eu tortor, erat scelerisque eget. Nunc hendrerit sed interdum lacus. Lorem quis viverra sed",
							"pretium, aliquam sit. Praesent elementum magna amet, tincidunt eros, nibh in leo. Malesuada purus, lacus, at aliquam suspendisse tempus. Quis tempus amet, velit nascetur sollicitudin. At sollicitudin eget amet in. Eu velit nascetur sollicitudin erhdfvssfvrgss eget viverra nec elementum. Lacus, facilisis tristique lectus in."
						]
					},
					{
						"title": "Gathering of Personal Information",
						"paragraphs": [
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, donec nunc eros, ullamcorper id feugiat quisque aliquam sagittis. Sem turpis sed viverra massa gravida pharetra. Non dui dolor potenti eu dignissim fusce. Ultrices amet, in curabitur a arcu a lectus morbi id. Iaculis erat sagittis in tortor cursus. Molestie urna eu tortor, erat scelerisque eget. Nunc hendrerit sed interdum lacus. Lorem quis viverra sed"
						]
					},
					{
						"title": "Protection of Personal Information",
						"paragraphs": [
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, donec nunc eros, ullamcorper id feugiat quisque aliquam sagittis. Sem turpis sed viverra massa gravida pharetra. Non dui dolor potenti eu dignissim fusce. Ultrices amet, in curabitur a arcu a lectus morbi id. Iaculis erat sagittis in tortor cursus.",
							"Molestie urna eu tortor, erat scelerisque eget. Nunc hendrerit sed interdum lacus. Lorem quis viverra sed Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, donec nunc eros, ullamcorper id feugiat"
						]
					},
					{
						"title": "Privacy Policy Changes",
						"paragraphs": [
							"<li>Sll the Themefisher items are designed to be with the latest , We check all</li><li>comments that threaten or harm the reputation of any person or organization</li><li>personal information including, but limited to, email addresses, telephone numbers</li><li>Any Update come in The technology Customer will get automatic Notification.</li></ol>"
						]
					}
				]
			}
		}
	]
}
},{
"pager": 1,
"path": "blog/post-1",
"type": "posts",
"filename": "post-1.json",
"fields": {
    "title": "Adversus is a web-based dialer and practical CRM solution",
    "image": {
        "src": "post-1.jpg",
        "alt": "Abstract painting with bright colors"
    },
    "body": "<h5 id='paragraph'>Paragraph</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil enim maxime corporis cumque totam aliquid nam sint inventore optio modi neque laborum officiis necessitatibus, facilis placeat pariatur! Voluptatem, sed harum pariatur adipisci voluptates voluptatum cumque, porro sint minima similique magni perferendis fuga! Optio vel ipsum excepturi tempore reiciendis id quidem? Vel in, doloribus debitis nesciunt fugit sequi magnam accusantium modi neque quis, vitae velit, pariatur harum autem a! Velit impedit atque maiores animi possimus asperiores natus repellendus excepturi sint architecto eligendi non, omnis nihil. Facilis, doloremque illum. Fugit optio laborum minus debitis natus illo perspiciatis corporis voluptatum rerum laboriosam.</p>",
    "author": "Jim Fisk",
    "date": "1/8/2020"
}
},{
"pager": 1,
"path": "blog/post-2",
"type": "posts",
"filename": "post-2.json",
"fields": {
    "title": "Pump-up the team morale and celebrate the excellence",
    "image": {
        "src": "post-2.jpg",
        "alt": "Abstract painting with bright colors"
    },
    "body": "<h5 id='paragraph'>Paragraph</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil enim maxime corporis cumque totam aliquid nam sint inventore optio modi neque laborum officiis necessitatibus, facilis placeat pariatur! Voluptatem, sed harum pariatur adipisci voluptates voluptatum cumque, porro sint minima similique magni perferendis fuga! Optio vel ipsum excepturi tempore reiciendis id quidem? Vel in, doloribus debitis nesciunt fugit sequi magnam accusantium modi neque quis, vitae velit, pariatur harum autem a! Velit impedit atque maiores animi possimus asperiores natus repellendus excepturi sint architecto eligendi non, omnis nihil. Facilis, doloremque illum. Fugit optio laborum minus debitis natus illo perspiciatis corporis voluptatum rerum laboriosam.</p>",
    "author": "Jim Fisk",
    "date": "1/8/2020",
    "featured": true
}
},{
"pager": 1,
"path": "blog/post-3",
"type": "posts",
"filename": "post-3.json",
"fields": {
    "title": "Screens with built in Present and Dismiss animations.",
    "image": {
        "src": "post-3.jpg",
        "alt": "Abstract painting with bright colors"
    },
    "body": "<h5 id='paragraph'>Paragraph</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil enim maxime corporis cumque totam aliquid nam sint inventore optio modi neque laborum officiis necessitatibus, facilis placeat pariatur! Voluptatem, sed harum pariatur adipisci voluptates voluptatum cumque, porro sint minima similique magni perferendis fuga! Optio vel ipsum excepturi tempore reiciendis id quidem? Vel in, doloribus debitis nesciunt fugit sequi magnam accusantium modi neque quis, vitae velit, pariatur harum autem a! Velit impedit atque maiores animi possimus asperiores natus repellendus excepturi sint architecto eligendi non, omnis nihil. Facilis, doloremque illum. Fugit optio laborum minus debitis natus illo perspiciatis corporis voluptatum rerum laboriosam.</p>",
    "author": "Jim Fisk",
    "date": "1/8/2020"
}
},{
"pager": 1,
"path": "blog/post-4",
"type": "posts",
"filename": "post-4.json",
"fields": {
    "title": "Adversus is a web-based dialer and practical CRM solution",
    "image": {
        "src": "post-1.jpg",
        "alt": "Abstract painting with bright colors"
    },
    "body": "<h5 id='paragraph'>Paragraph</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil enim maxime corporis cumque totam aliquid nam sint inventore optio modi neque laborum officiis necessitatibus, facilis placeat pariatur! Voluptatem, sed harum pariatur adipisci voluptates voluptatum cumque, porro sint minima similique magni perferendis fuga! Optio vel ipsum excepturi tempore reiciendis id quidem? Vel in, doloribus debitis nesciunt fugit sequi magnam accusantium modi neque quis, vitae velit, pariatur harum autem a! Velit impedit atque maiores animi possimus asperiores natus repellendus excepturi sint architecto eligendi non, omnis nihil. Facilis, doloremque illum. Fugit optio laborum minus debitis natus illo perspiciatis corporis voluptatum rerum laboriosam.</p>",
    "author": "Jim Fisk",
    "date": "1/8/2020"
}
},{
"pager": 1,
"path": "blog/post-5",
"type": "posts",
"filename": "post-5.json",
"fields": {
    "title": "Adversus is a web-based dialer and practical CRM solution",
    "image": {
        "src": "post-1.jpg",
        "alt": "Abstract painting with bright colors"
    },
    "body": "<h5 id='paragraph'>Paragraph</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil enim maxime corporis cumque totam aliquid nam sint inventore optio modi neque laborum officiis necessitatibus, facilis placeat pariatur! Voluptatem, sed harum pariatur adipisci voluptates voluptatum cumque, porro sint minima similique magni perferendis fuga! Optio vel ipsum excepturi tempore reiciendis id quidem? Vel in, doloribus debitis nesciunt fugit sequi magnam accusantium modi neque quis, vitae velit, pariatur harum autem a! Velit impedit atque maiores animi possimus asperiores natus repellendus excepturi sint architecto eligendi non, omnis nihil. Facilis, doloremque illum. Fugit optio laborum minus debitis natus illo perspiciatis corporis voluptatum rerum laboriosam.</p>",
    "author": "Jim Fisk",
    "date": "1/8/2020"
}
},{
"pager": 1,
"path": "blog/post-6",
"type": "posts",
"filename": "post-6.json",
"fields": {
    "title": "Screens with built in Present and Dismiss animations.",
    "image": {
        "src": "post-3.jpg",
        "alt": "Abstract painting with bright colors"
    },
    "body": "<h5 id='paragraph'>Paragraph</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil enim maxime corporis cumque totam aliquid nam sint inventore optio modi neque laborum officiis necessitatibus, facilis placeat pariatur! Voluptatem, sed harum pariatur adipisci voluptates voluptatum cumque, porro sint minima similique magni perferendis fuga! Optio vel ipsum excepturi tempore reiciendis id quidem? Vel in, doloribus debitis nesciunt fugit sequi magnam accusantium modi neque quis, vitae velit, pariatur harum autem a! Velit impedit atque maiores animi possimus asperiores natus repellendus excepturi sint architecto eligendi non, omnis nihil. Facilis, doloremque illum. Fugit optio laborum minus debitis natus illo perspiciatis corporis voluptatum rerum laboriosam.</p>",
    "author": "Jim Fisk",
    "date": "1/8/2020"
}
},{
"pager": 1,
"path": "blog/post-7",
"type": "posts",
"filename": "post-7.json",
"fields": {
    "title": "Adversus is a web-based dialer and practical CRM solution",
    "image": {
        "src": "post-1.jpg",
        "alt": "Abstract painting with bright colors"
    },
    "body": "<h5 id='paragraph'>Paragraph</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil enim maxime corporis cumque totam aliquid nam sint inventore optio modi neque laborum officiis necessitatibus, facilis placeat pariatur! Voluptatem, sed harum pariatur adipisci voluptates voluptatum cumque, porro sint minima similique magni perferendis fuga! Optio vel ipsum excepturi tempore reiciendis id quidem? Vel in, doloribus debitis nesciunt fugit sequi magnam accusantium modi neque quis, vitae velit, pariatur harum autem a! Velit impedit atque maiores animi possimus asperiores natus repellendus excepturi sint architecto eligendi non, omnis nihil. Facilis, doloremque illum. Fugit optio laborum minus debitis natus illo perspiciatis corporis voluptatum rerum laboriosam.</p>",
    "author": "Jim Fisk",
    "date": "1/8/2020"
}
},{
"pager": 1,
"path": "blog/1",
"type": "blog",
"filename": "blog.json",
"fields": { "title": "Latest News" }
},{
"pager": 2,
"path": "blog/2",
"type": "blog",
"filename": "blog.json",
"fields": { "title": "Latest News" }
},{
"pager": 3,
"path": "blog/3",
"type": "blog",
"filename": "blog.json",
"fields": { "title": "Latest News" }
},];

export default allContent;