import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface PlayLoad {
  sub: string;
}

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // Token
  const authToken = req.headers.authorization;
  if (!authToken) {
    return res.status(401).end();
  }
  const [, tonken] = authToken.split(" ");
  try {
    const { sub } = verify(tonken, process.env.JWT_SECRET) as PlayLoad;
    return next();
  } catch (err) {
    return res.status(401).end();
  }
}
