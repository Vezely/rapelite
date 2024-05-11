import multer from 'multer';
import path from 'path';
import { NextResponse } from 'next/server';

export const config = {
	api: {
		bodyParser: false,
	},
};

// Configuration de Multer
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		const chemin = 'public/images/';
		cb(null, chemin);
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + path.extname(file.originalname));
	},
});

const upload = multer({
	storage: storage,
	limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
	fileFilter: function (req, file, cb) {
		checkFileType(file, cb);
	},
}).single('photo');

function checkFileType(file, cb) {
	const filetypes = /jpeg|jpg|avif|png|gif|webp/;
	const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
	const mimetype = filetypes.test(file.mimetype);

	if (mimetype && extname) {
		return cb(null, true);
	} else {
		cb(new Error('Images Only!'));
	}
}

export async function POST(req, res) {
	// const { params, body } = request;
	// const { chemin } = body;
	// console.log(request.body);

	// const artistName = params.chemin;

	try {
		await new Promise((resolve, reject) => {
			upload(req, res, async (err) => {
				console.log(req);
				if (err) {
					reject(err);
				} else {
					resolve();
				}
			});
		});
	} catch (error) {
		return NextResponse.error(new Error('An error occurred while processing the request.'));
	}

	return NextResponse.json({});
}
